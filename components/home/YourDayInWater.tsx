'use client'

import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

const MOMENTS = [
  { time: '07:30', label: 'Morning', ml: 300 },
  { time: '10:30', label: 'Mid-morning', ml: 350 },
  { time: '13:00', label: 'Lunch', ml: 450 },
  { time: '16:00', label: 'Afternoon', ml: 350 },
  { time: '19:00', label: 'Dinner', ml: 450 },
  { time: '21:30', label: 'Evening', ml: 250 },
]

const TOTAL = MOMENTS.reduce((sum, m) => sum + m.ml, 0)

/**
 * Illustrative daily drinking rhythm - not a medical schedule.
 * Waterline rises as the section scrolls into view.
 */
export function YourDayInWater() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const lineScale = useTransform(scrollYProgress, [0.1, 0.85], [0, 1])

  return (
    <section
      ref={ref}
      className="relative bg-ice dark:bg-paper-2"
      aria-labelledby="day-in-water-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-xl">
          <h2
            id="day-in-water-heading"
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-ink"
          >
            Your day in water
          </h2>
          <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-ink-2">
            An illustrative sip rhythm totaling about{' '}
            <span className="font-measure font-semibold text-ocean">
              {(TOTAL / 1000).toFixed(1)} L
            </span>
            . Adjust to your thirst, climate, and activity. Not a prescription.
          </p>
        </div>

        <div className="relative mt-14 md:mt-20">
          {/* Rising waterline */}
          <div
            className="pointer-events-none absolute bottom-0 left-[1.15rem] top-0 w-px bg-rule md:left-[1.4rem]"
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute bottom-0 left-[1.15rem] w-0.5 origin-bottom bg-ocean md:left-[1.4rem]"
            style={{
              scaleY: reduce ? 1 : lineScale,
              height: '100%',
            }}
            aria-hidden
          />

          <ol className="relative space-y-0">
            {MOMENTS.map((m, i) => (
              <li
                key={m.time}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-rule/70 py-6 last:border-b-0 md:grid-cols-[3rem_7rem_1fr_auto] md:gap-8 md:py-8"
              >
                <span
                  className="relative z-10 mt-1 size-2.5 justify-self-center rounded-full bg-ocean ring-4 ring-ice dark:ring-paper-2"
                  aria-hidden
                />
                <p className="font-measure text-base tabular-nums text-ink-3 md:col-start-2">
                  {m.time}
                </p>
                <div className="col-start-2 md:col-start-3">
                  <p className="font-heading text-lg font-bold tracking-tight text-ink">
                    {m.label}
                  </p>
                  <p className="mt-1 text-base text-ink-2">
                    About one focused drink.
                  </p>
                </div>
                <p className="col-start-2 font-heading text-3xl font-bold tabular-nums tracking-tight text-ocean md:col-start-4 md:text-right md:text-4xl">
                  {m.ml}
                  <span className="ml-1 font-measure text-base font-normal text-ink-3">
                    ml
                  </span>
                </p>
                {/* cumulative hint on last */}
                {i === MOMENTS.length - 1 ? (
                  <p className="col-span-full mt-2 text-base text-ink-3 md:col-start-3">
                    Running total ≈ {(TOTAL / 1000).toFixed(1)} L across the day
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
