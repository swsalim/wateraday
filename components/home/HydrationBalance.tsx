import Link from 'next/link'

/**
 * Hydration is balance - continuum between too little and too much.
 * Educational, not diagnostic.
 */
export function HydrationBalance() {
  return (
    <section
      className="bg-paper-3"
      aria-labelledby="balance-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <h2
          id="balance-heading"
          className="font-heading text-[clamp(2.75rem,8vw,6rem)] font-bold tracking-tight text-ink"
        >
          Balance
        </h2>
        <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-ink-2 md:text-lg">
          Hydration is not about drinking as much as possible. It is about
          matching intake to loss.
        </p>

        {/* Continuum */}
        <div className="mt-12 md:mt-16">
          <div
            className="relative h-4 overflow-hidden rounded-[var(--radius-pill)] bg-gradient-to-r from-ink-3 via-ocean to-aqua"
            role="img"
            aria-label="Spectrum from dehydrated through balanced to too much water"
          >
            <span
              className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foam bg-pulse shadow-[var(--shadow-soft)]"
              aria-hidden
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-base">
            <p className="font-heading font-bold text-ink">
              Dehydrated
              <span className="mt-1 block font-sans text-base font-normal text-ink-2">
                Dark urine, thirst, fatigue
              </span>
            </p>
            <p className="text-center font-heading font-bold text-ocean">
              Balanced
              <span className="mt-1 block font-sans text-base font-normal text-ink-2">
                Pale yellow, steady energy
              </span>
            </p>
            <p className="text-right font-heading font-bold text-ink">
              Too much
              <span className="mt-1 block font-sans text-base font-normal text-ink-2">
                Clear urine, bloating, rare risk
              </span>
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-rule pt-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="font-heading text-xl font-bold text-ink">
              Too little
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-2">
              Mild dehydration can blunt focus and mood. Severe loss needs
              medical care.{' '}
              <Link
                href="/dehydration"
                className="font-semibold text-accent underline underline-offset-4"
              >
                Learn dehydration signs
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-ink">
              Too much
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-2">
              Overdrinking can dilute sodium (hyponatremia). Listen to thirst,
              especially during long endurance efforts with heavy sweat loss.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
