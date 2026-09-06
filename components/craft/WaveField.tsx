import { cn } from '@/lib/utils'

interface WaveFieldProps {
  className?: string
  variant?: 'hero' | 'footer'
}

/** Hand-built Tier-B SVG wave field — decorative atmosphere, not stock */
export function WaveField({ className, variant = 'hero' }: WaveFieldProps) {
  const opacity = variant === 'hero' ? 0.55 : 0.35
  return (
    <div
      className={cn('pointer-events-none absolute inset-x-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <svg
        className="h-full w-[200%] max-w-none animate-wave motion-reduce:animate-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 72C160 96 320 24 480 48C640 72 800 108 960 84C1120 60 1280 24 1440 48V120H0V72Z"
          fill="var(--color-accent)"
          fillOpacity={opacity * 0.18}
        />
        <path
          d="M0 84C180 60 300 108 480 96C660 84 780 36 960 54C1140 72 1260 108 1440 90V120H0V84Z"
          fill="var(--color-lagoon)"
          fillOpacity={opacity * 0.28}
        />
        <path
          d="M0 96C200 108 280 72 480 78C680 84 760 114 960 102C1160 90 1240 66 1440 78V120H0V96Z"
          fill="var(--color-deep)"
          fillOpacity={opacity * 0.2}
        />
      </svg>
    </div>
  )
}
