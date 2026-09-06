'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { cn } from '@/lib/utils'
import {
  calculateWaterIntakeMl,
  formatVolume,
  mlToBottles,
  mlToCups,
  mlToGlasses,
  mlToLiters,
} from '@/lib/water-intake'
import { LivingWaterMeasure } from '@/components/craft/LivingWaterMeasure'
import { WaveDivider } from '@/components/craft/WaveDivider'
import { Slider } from '@/components/ui/Slider'

type Sex = 'male' | 'female'
type Activity = 'rare' | 'occasional' | 'weekly' | 'daily'
type UnitSystem = 'metric' | 'us'

const ACTIVITY_OPTIONS: { value: Activity; label: string }[] = [
  { value: 'rare', label: 'Low' },
  { value: 'occasional', label: 'Moderate' },
  { value: 'weekly', label: 'High' },
  { value: 'daily', label: 'Very high' },
]

function kgToLb(kg: number) {
  return Math.round(kg * 2.20462)
}
function lbToKg(lb: number) {
  return Math.round(lb / 2.20462)
}
function cmToIn(cm: number) {
  return Math.round(cm / 2.54)
}
function inToCm(inches: number) {
  return Math.round(inches * 2.54)
}

export function DailyWaterHero() {
  const reduce = useReducedMotion()
  const [sex, setSex] = useState<Sex>('male')
  const [age, setAge] = useState(28)
  const [weightKg, setWeightKg] = useState(70)
  const [heightCm, setHeightCm] = useState(170)
  const [activity, setActivity] = useState<Activity>('occasional')
  const [units, setUnits] = useState<UnitSystem>('metric')
  const [ml, setMl] = useState(0)

  useEffect(() => {
    const next = calculateWaterIntakeMl({
      gender: sex,
      age,
      weight: weightKg,
      height: heightCm,
      activity,
    })
    setMl(next)
  }, [sex, age, weightKg, heightCm, activity])

  const liters = mlToLiters(ml)
  const translations = useMemo(
    () => [
      { label: 'cups', value: formatVolume(mlToCups(ml), 0) },
      { label: '× 300 ml glasses', value: formatVolume(mlToGlasses(ml, 300), 1) },
      { label: '× 750 ml bottles', value: formatVolume(mlToBottles(ml), 1) },
    ],
    [ml]
  )

  const weightDisplay = units === 'metric' ? weightKg : kgToLb(weightKg)
  const heightDisplay = units === 'metric' ? heightCm : cmToIn(heightCm)

  return (
    <section
      id="calculator"
      className="relative overflow-x-clip bg-mist dark:bg-paper"
    >
      <div className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-10 px-4 pb-16 pt-8 md:gap-12 md:px-8 md:pb-20 md:pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-6">
        {/* Copy */}
        <div className="min-w-0 lg:col-span-5">
          <h1 className="font-heading text-[length:var(--text-hero)] font-bold leading-[0.92] tracking-[-0.04em] text-ink [overflow-wrap:anywhere]">
            <span className="block">How much</span>
            <span className="block text-ocean">water</span>
            <span className="block">is your day?</span>
          </h1>
          <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-ink-2 md:text-lg">
            Find your estimated daily water intake in seconds.
          </p>

          {/* Unit toggle */}
          <div className="mt-8 inline-flex rounded-[var(--radius-button)] border border-rule bg-foam p-1 dark:bg-surface">
            {(['metric', 'us'] as UnitSystem[]).map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnits(u)}
                className={cn(
                  'rounded-[var(--radius-button)] px-3 py-1.5 font-measure text-xs uppercase tracking-wider transition-[background-color,color] duration-[var(--dur-short)]',
                  units === u
                    ? 'bg-deep-ink text-foam dark:bg-accent dark:text-accent-ink'
                    : 'text-ink-2 hover:text-ink'
                )}
              >
                {u === 'metric' ? 'Metric' : 'US'}
              </button>
            ))}
          </div>
        </div>

        {/* Living measure */}
        <div className="flex min-w-0 justify-center lg:col-span-3">
          <LivingWaterMeasure ml={ml} size="lg" />
        </div>

        {/* Tactile controls */}
        <div className="min-w-0 space-y-6 lg:col-span-4">
          {/* Sex */}
          <fieldset>
            <legend className="mb-2 font-measure text-xs uppercase tracking-[0.14em] text-ink-3">
              Sex
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {([
                ['male', 'Male'],
                ['female', 'Female'],
              ] as const).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSex(value)}
                  className={cn(
                    'rounded-[var(--radius-button)] border px-4 py-3 text-base font-semibold transition-[background-color,border-color,color,transform] duration-[var(--dur-short)] ease-[var(--ease-out)] active:translate-y-px',
                    sex === value
                      ? 'border-ocean bg-ocean text-foam'
                      : 'border-rule bg-foam text-ink-2 hover:border-ocean/50 hover:text-ink dark:bg-surface'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          <SliderField
            label="Age"
            value={age}
            display={`${age}`}
            unit="yr"
            min={18}
            max={100}
            onChange={setAge}
          />

          <SliderField
            label="Weight"
            value={weightDisplay}
            display={`${weightDisplay}`}
            unit={units === 'metric' ? 'kg' : 'lb'}
            min={units === 'metric' ? 30 : 66}
            max={units === 'metric' ? 200 : 440}
            onChange={(v) =>
              setWeightKg(units === 'metric' ? v : lbToKg(v))
            }
          />

          <SliderField
            label="Height"
            value={heightDisplay}
            display={`${heightDisplay}`}
            unit={units === 'metric' ? 'cm' : 'in'}
            min={units === 'metric' ? 140 : 55}
            max={units === 'metric' ? 210 : 83}
            onChange={(v) =>
              setHeightCm(units === 'metric' ? v : inToCm(v))
            }
          />

          <fieldset>
            <legend className="mb-2 font-measure text-xs uppercase tracking-[0.14em] text-ink-3">
              Activity
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {ACTIVITY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setActivity(opt.value)}
                  className={cn(
                    'whitespace-nowrap rounded-[var(--radius-button)] border px-2 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-[var(--dur-short)] active:translate-y-px sm:text-base',
                    activity === opt.value
                      ? 'border-ocean bg-ocean text-foam'
                      : 'border-rule bg-foam text-ink-2 hover:border-ocean/50 hover:text-ink dark:bg-surface'
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      {/* Result strip */}
      <div
        id="result"
        className="border-y border-rule bg-ice/80 dark:bg-paper-2"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 md:flex-row md:items-end md:justify-between md:px-8 md:py-10">
          <div>
            <p className="font-measure text-xs uppercase tracking-[0.16em] text-ink-3">
              Your daily estimate
            </p>
            <motion.p
              key={formatVolume(liters, 1)}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 font-heading text-[clamp(3rem,8vw,5.5rem)] font-bold leading-none tracking-[-0.04em] text-ink tabular-nums"
            >
              {formatVolume(liters, 1)}
              <span className="ml-2 font-measure text-[0.35em] font-normal text-ocean">
                L
              </span>
            </motion.p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {translations.map((t) => (
              <li key={t.label} className="min-w-0">
                <p className="font-heading text-2xl font-bold tabular-nums text-ink md:text-3xl">
                  ≈ {t.value}
                </p>
                <p className="text-base text-ink-3">
                  {t.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <WaveDivider fillClassName="fill-ice dark:fill-paper-2" />
    </section>
  )
}

function SliderField({
  label,
  value,
  display,
  unit,
  min,
  max,
  onChange,
}: {
  label: string
  value: number
  display: string
  unit: string
  min: number
  max: number
  onChange: (n: number) => void
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label className="font-measure text-xs uppercase tracking-[0.14em] text-ink-3">
          {label}
        </label>
        <p className="font-heading text-3xl font-semibold tabular-nums tracking-tight text-ink">
          {display}
          <span className="ml-1 font-measure text-sm font-normal uppercase text-ink-3">
            {unit}
          </span>
        </p>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={1}
        onValueChange={([v]) => onChange(v)}
        aria-label={label}
        className="w-full"
      />
    </div>
  )
}
