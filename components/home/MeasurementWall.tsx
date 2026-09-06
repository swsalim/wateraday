'use client'

import { useState } from 'react'
import Link from 'next/link'

import { ConversionMetrics } from '@/config/metrics'
import { convertValue, getMetricFromSlug } from '@/lib/metrics'
import { cn } from '@/lib/utils'

const WALL = [
  { slug: 'liter', mark: 'L' },
  { slug: 'milliliter', mark: 'ML' },
  { slug: 'us-fluid-ounce', mark: 'OZ' },
  { slug: 'us-legal-cup', mark: 'CUP' },
  { slug: 'us-liquid-gallon', mark: 'GAL' },
  { slug: 'us-liquid-quart', mark: 'QT' },
  { slug: 'us-liquid-pint', mark: 'PT' },
  { slug: 'us-tablespoon', mark: 'TBSP' },
  { slug: 'us-teaspoon', mark: 'TSP' },
] as const

/**
 * Typographic measurement wall - tap a unit to reveal 1 unit in ml.
 */
export function MeasurementWall() {
  const [active, setActive] = useState<string | null>('liter')

  const activeMeta = active
    ? getMetricFromSlug(active, ConversionMetrics)
    : null
  const inMl =
    active != null ? convertValue(1, active, 'milliliter') : null

  return (
    <section
      className="bg-ice dark:bg-paper-2"
      aria-labelledby="measure-wall-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <h2
          id="measure-wall-heading"
          className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink"
        >
          Everyday measures
        </h2>
        <p className="mt-3 max-w-[50ch] text-base leading-relaxed text-ink-2">
          Tap a unit to see how it relates to milliliters.
        </p>

        <ul className="mt-12 flex flex-wrap items-end gap-x-4 gap-y-6 md:mt-16 md:gap-x-8 md:gap-y-10">
          {WALL.map((item) => {
            const selected = active === item.slug
            return (
              <li key={item.slug}>
                <button
                  type="button"
                  onClick={() => setActive(item.slug)}
                  aria-pressed={selected}
                  className={cn(
                    'font-heading font-bold tracking-tight transition-colors duration-[var(--dur-short)]',
                    'text-[clamp(2.25rem,6vw,5.5rem)] leading-none',
                    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus',
                    selected
                      ? 'text-ocean'
                      : 'text-ink/25 hover:text-ink/55'
                  )}
                >
                  {item.mark}
                </button>
              </li>
            )
          })}
        </ul>

        <div
          className="mt-10 min-h-[5.5rem] border-t border-rule pt-6"
          aria-live="polite"
        >
          {activeMeta && inMl ? (
            <>
              <p className="font-heading text-2xl font-bold text-ink md:text-3xl">
                1 {activeMeta.name} = {inMl} ml
              </p>
              <Link
                href={`/volume/${active}/milliliter`}
                className="mt-3 inline-block text-base font-semibold text-accent underline underline-offset-4"
              >
                Convert {activeMeta.name.toLowerCase()} to milliliters
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}
