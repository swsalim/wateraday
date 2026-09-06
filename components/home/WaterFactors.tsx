/**
 * Factors affecting water need - each factor gets a distinct composition.
 * No identical card grid.
 */
export function WaterFactors() {
  return (
    <section
      className="bg-mist dark:bg-paper"
      aria-labelledby="factors-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <h2
          id="factors-heading"
          className="max-w-2xl font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-ink"
        >
          What changes your water needs?
        </h2>
        <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-ink-2">
          Daily intake is personal. Size, movement, heat, and health all shift
          how much you need.
        </p>

        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {/* BODY - measurement scale */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <h3 className="font-heading text-xl font-bold text-ink md:text-2xl">
                Body
              </h3>
              <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-ink-2">
                Larger bodies typically need more fluid to keep circulating
                volume and temperature stable.
              </p>
            </div>
            <div className="md:col-span-7">
              <div
                className="relative h-16 w-full overflow-hidden rounded-[var(--radius-panel)] border border-rule bg-ice dark:bg-paper-2"
                role="img"
                aria-label="Scale visualization from lighter to heavier body size"
              >
                <div className="absolute inset-y-0 left-0 w-[38%] bg-ocean/25" />
                <div className="absolute inset-y-0 left-0 w-[62%] border-r-2 border-ocean bg-ocean/45" />
                <div className="absolute inset-x-0 bottom-2 flex justify-between px-3 font-measure text-sm text-ink-3">
                  <span>smaller</span>
                  <span className="text-ocean">more water</span>
                  <span>larger</span>
                </div>
              </div>
            </div>
          </div>

          {/* MOVEMENT - activity steps */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <h3 className="font-heading text-xl font-bold text-ink md:text-2xl">
                Movement
              </h3>
              <p className="mt-3 max-w-[40ch] text-base leading-relaxed text-ink-2">
                Sweat loss climbs with intensity. Training days often need an
                extra glass or two beyond a desk day.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:col-span-8">
              {[
                { label: 'Low', bar: 'h-10' },
                { label: 'Moderate', bar: 'h-16' },
                { label: 'High', bar: 'h-24' },
                { label: 'Very high', bar: 'h-32' },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col items-center justify-end gap-2 border border-rule bg-foam px-2 py-4 dark:bg-surface"
                >
                  <div
                    className={`w-full max-w-[3rem] rounded-t-[var(--radius-button)] bg-gradient-to-t from-ocean to-aqua ${item.bar}`}
                    aria-hidden
                  />
                  <span className="text-center text-base font-medium text-ink">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* HEAT - temperature strip */}
          <div className="overflow-hidden border border-rule">
            <div
              className="h-3 w-full bg-gradient-to-r from-ice via-aqua to-ocean"
              aria-hidden
            />
            <div className="grid grid-cols-1 gap-6 bg-foam p-6 dark:bg-surface md:grid-cols-2 md:p-10">
              <div>
                <h3 className="font-heading text-xl font-bold text-ink md:text-2xl">
                  Heat
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-2">
                  Hot or humid air raises sweat rate even when you are not
                  exercising. Cool, dry rooms usually need less.
                </p>
              </div>
              <p className="self-end font-heading text-4xl font-bold tracking-tight text-ocean md:text-5xl">
                + climate
                <span className="mt-2 block font-sans text-base font-normal leading-relaxed text-ink-2">
                  Plan an extra bottle on travel days and summer afternoons.
                </span>
              </p>
            </div>
          </div>

          {/* ENVIRONMENT + HEALTH as split stack */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div className="border-t border-rule pt-6">
              <h3 className="font-heading text-xl font-bold text-ink md:text-2xl">
                Environment
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-2">
                Altitude, dry indoor air, and long flights increase fluid loss.
                Cabin humidity is often very low.
              </p>
            </div>
            <div className="border-t border-rule pt-6">
              <h3 className="font-heading text-xl font-bold text-ink md:text-2xl">
                Health and life stage
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-2">
                Pregnancy, breastfeeding, fever, and some medications change
                requirements. Talk with a clinician when needs feel unclear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
