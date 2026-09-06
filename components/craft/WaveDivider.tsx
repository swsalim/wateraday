/**
 * Full-bleed SVG wave used between colored sections.
 * Place at the bottom of a section; `fill` should match the next section's background.
 */
export function WaveDivider({
  fillClassName = 'fill-ice',
  className = '',
  flip = false,
}: {
  fillClassName?: string
  className?: string
  flip?: boolean
}) {
  return (
    <div
      className={`pointer-events-none relative -mb-px w-full leading-[0] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 72"
        className={`block h-10 w-full md:h-14 ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          className={fillClassName}
          d="M0 28C180 58 360 72 540 62C720 52 900 18 1080 14C1260 10 1380 28 1440 36V72H0V28Z"
        />
      </svg>
    </div>
  )
}
