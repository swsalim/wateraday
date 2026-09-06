import Link from 'next/link'

import { cn } from '@/lib/utils'

const adults = [
  {
    label: 'Adults, men',
    liters: '3.7',
    ounces: '125',
    note: 'About 15.5 cups from all fluids',
  },
  {
    label: 'Adults, women',
    liters: '2.7',
    ounces: '91',
    note: 'About 11.5 cups from all fluids',
  },
]

const ageGroups = [
  { name: '1-3 years', liters: '1.3-2.1', ounces: '44-72' },
  { name: '4-8 years', liters: '1.7-2.4', ounces: '57-81' },
  { name: '9-13 years', liters: '2.4-3.3', ounces: '81-112' },
  { name: '14-18 years (boys)', liters: '3.3-3.7', ounces: '112-125' },
  { name: '14-18 years (girls)', liters: '2.3-2.7', ounces: '78-91' },
]

/**
 * Adequate intake reference from National Academies guidelines.
 * Includes fluids from water, beverages, and food.
 */
export function TableWaterIntake({ className }: { className?: string }) {
  return (
    <div className={cn('min-w-0', className)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {adults.map((row) => (
          <div
            key={row.label}
            className="min-w-0 border border-rule bg-foam px-5 py-6 dark:bg-surface md:px-7 md:py-8"
          >
            <p className="font-measure text-sm uppercase tracking-[0.12em] text-ink-3">
              {row.label}
            </p>
            <p className="mt-3 font-heading text-[clamp(2.75rem,6vw,4rem)] font-bold leading-none tracking-tight text-ink tabular-nums">
              {row.liters}
              <span className="ml-2 font-measure text-[0.35em] font-normal uppercase text-ocean">
                L
              </span>
            </p>
            <p className="mt-3 font-measure text-base tabular-nums text-ink-2">
              {row.ounces} fl oz
            </p>
            <p className="mt-2 text-base text-ink-2">{row.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-12">
        <h3 className="font-heading text-lg font-bold tracking-tight text-ink md:text-xl">
          By age
        </h3>
        <p className="mt-2 max-w-[55ch] text-base text-ink-2">
          Ranges reflect growing bodies. Values still include moisture from food
          and other drinks.
        </p>

        <table className="mt-6 w-full min-w-0 text-left">
          <caption className="sr-only">
            Recommended daily water intake by age group
          </caption>
          <thead>
            <tr className="border-b border-rule">
              <th
                scope="col"
                className="py-3 pr-4 font-heading text-base font-bold text-ink"
              >
                Age
              </th>
              <th
                scope="col"
                className="py-3 pr-4 font-heading text-base font-bold text-ink"
              >
                Liters
              </th>
              <th
                scope="col"
                className="hidden py-3 font-heading text-base font-bold text-ink sm:table-cell"
              >
                Fluid ounces
              </th>
            </tr>
          </thead>
          <tbody>
            {ageGroups.map((group) => (
              <tr key={group.name} className="border-b border-rule/70 last:border-b-0">
                <th
                  scope="row"
                  className="py-4 pr-4 text-base font-medium text-ink"
                >
                  {group.name}
                </th>
                <td className="py-4 pr-4 font-heading text-base font-bold tabular-nums text-ocean">
                  {group.liters}
                  <span className="ml-1 font-measure text-sm font-normal text-ink-3">
                    L
                  </span>
                </td>
                <td className="hidden py-4 font-measure text-base tabular-nums text-ink-2 sm:table-cell">
                  {group.ounces} oz
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/** Homepage section wrapping guidelines + adult measure highlights */
export function DailyGuidelines() {
  return (
    <section
      className="bg-foam dark:bg-surface"
      aria-labelledby="daily-guidelines-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="daily-guidelines-heading"
            className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink"
          >
            How much water should you drink in a day?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-2 md:text-lg">
            The National Academies of Sciences, Engineering, and Medicine
            publishes adequate intake values for total water. That means plain
            water plus other beverages and the moisture in food.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-2">
            Treat these as baselines, not prescriptions. Activity, climate, and
            health shift the target.{' '}
            <Link
              href="/#calculator"
              className="font-semibold text-accent underline underline-offset-4"
            >
              Use the calculator
            </Link>{' '}
            for a personal estimate, then follow thirst.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <p className="font-measure text-sm uppercase tracking-[0.14em] text-ink-3">
            Adequate intake, adults
          </p>
          <TableWaterIntake className="mt-4" />
        </div>

        <p className="mt-10 max-w-[60ch] text-base leading-relaxed text-ink-3">
          Source framing: general adequate intake guidelines. Individual needs
          vary. Seek clinical advice when you have kidney disease, heart
          conditions, or other fluid restrictions.
        </p>
      </div>
    </section>
  )
}
