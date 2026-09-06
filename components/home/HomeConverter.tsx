'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

import { ConversionMetrics } from '@/config/metrics'
import { convertValue, getMetricFromSlug } from '@/lib/metrics'
import { cn } from '@/lib/utils'

const HOME_UNITS = [
  'liter',
  'milliliter',
  'us-legal-cup',
  'us-fluid-ounce',
  'us-liquid-gallon',
  'us-liquid-quart',
  'us-liquid-pint',
  'us-tablespoon',
  'us-teaspoon',
] as const

type UnitSlug = (typeof HOME_UNITS)[number]

/**
 * Bidirectional volume converter for the homepage.
 * Either side edits; the other updates instantly.
 */
export function HomeConverter() {
  const reduce = useReducedMotion()
  const [fromSlug, setFromSlug] = useState<UnitSlug>('liter')
  const [toSlug, setToSlug] = useState<UnitSlug>('us-legal-cup')
  const [litersBase, setLitersBase] = useState(1)
  const [fromDraft, setFromDraft] = useState('1')
  const [toDraft, setToDraft] = useState<string | null>(null)

  const toValue = useMemo(() => {
    return convertValue(litersBase, 'liter', toSlug) ?? ''
  }, [litersBase, toSlug])

  const fromValue = useMemo(() => {
    return convertValue(litersBase, 'liter', fromSlug) ?? ''
  }, [litersBase, fromSlug])

  function handleFromInput(raw: string) {
    setFromDraft(raw)
    setToDraft(null)
    const n = parseFloat(raw)
    if (!Number.isFinite(n)) return
    const asLiters = convertValue(n, fromSlug, 'liter')
    if (asLiters != null) setLitersBase(parseFloat(asLiters))
  }

  function handleToInput(raw: string) {
    setToDraft(raw)
    setFromDraft('')
    const n = parseFloat(raw)
    if (!Number.isFinite(n)) return
    const asLiters = convertValue(n, toSlug, 'liter')
    if (asLiters != null) {
      setLitersBase(parseFloat(asLiters))
      setFromDraft(convertValue(parseFloat(asLiters), 'liter', fromSlug) ?? '')
    }
  }

  function changeFromUnit(slug: UnitSlug) {
    setFromSlug(slug)
    setFromDraft(convertValue(litersBase, 'liter', slug) ?? '')
    setToDraft(null)
  }

  function changeToUnit(slug: UnitSlug) {
    setToSlug(slug)
    setToDraft(null)
  }

  const shownFrom = fromDraft !== '' ? fromDraft : fromValue
  const shownTo = toDraft ?? toValue

  return (
    <section
      className="bg-mist dark:bg-paper"
      aria-labelledby="converter-heading"
      id="converter"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="converter-heading"
              className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink"
            >
              Convert water volumes
            </h2>
            <p className="mt-3 max-w-[50ch] text-base leading-relaxed text-ink-2">
              Edit either side. Values update instantly.
            </p>
          </div>
          <Link
            href="/volume-converter"
            className="text-base font-semibold text-accent underline underline-offset-4"
          >
            Open full converter
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-6 md:mt-16 md:grid-cols-[1fr_auto_1fr] md:gap-8">
          <UnitField
            id="home-from"
            value={shownFrom}
            unit={fromSlug}
            onValueChange={handleFromInput}
            onUnitChange={changeFromUnit}
          />

          <div className="flex flex-col items-center gap-2" aria-hidden>
            <motion.div
              key={shownTo}
              initial={reduce ? false : { scaleY: 0.45, opacity: 0.5 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="h-12 w-0.5 origin-top bg-ocean md:h-20"
            />
            <span className="font-measure text-sm uppercase tracking-wider text-ink-3">
              flows to
            </span>
            <div className="h-12 w-0.5 bg-ocean/40 md:h-20" />
          </div>

          <UnitField
            id="home-to"
            value={shownTo}
            unit={toSlug}
            onValueChange={handleToInput}
            onUnitChange={changeToUnit}
          />
        </div>
      </div>
    </section>
  )
}

function UnitField({
  id,
  value,
  unit,
  onValueChange,
  onUnitChange,
}: {
  id: string
  value: string
  unit: UnitSlug
  onValueChange: (v: string) => void
  onUnitChange: (u: UnitSlug) => void
}) {
  return (
    <div className="min-w-0 border border-rule bg-foam p-5 dark:bg-surface md:p-8">
      <label htmlFor={id} className="sr-only">
        Volume value
      </label>
      <input
        id={id}
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className={cn(
          'w-full min-w-0 bg-transparent font-heading text-[clamp(2.5rem,7vw,4.5rem)] font-bold tabular-nums tracking-tight text-ink outline-none',
          'focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2'
        )}
        aria-label="Volume"
      />
      <label
        htmlFor={`${id}-unit`}
        className="mt-4 block font-measure text-sm uppercase tracking-wider text-ink-3"
      >
        Unit
      </label>
      <select
        id={`${id}-unit`}
        value={unit}
        onChange={(e) => onUnitChange(e.target.value as UnitSlug)}
        className="mt-1 w-full border border-rule bg-ice px-3 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-focus dark:bg-paper-2"
      >
        {HOME_UNITS.map((slug) => (
          <option key={slug} value={slug}>
            {getMetricFromSlug(slug, ConversionMetrics)?.name ?? slug}
          </option>
        ))}
      </select>
    </div>
  )
}
