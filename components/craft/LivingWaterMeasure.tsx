'use client'

import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { formatVolume, mlToLiters } from '@/lib/water-intake'

type LivingWaterMeasureProps = {
  ml: number
  maxMl?: number
  className?: string
  showLabel?: boolean
  size?: 'md' | 'lg'
}

/** Signature vessel: fill height encodes volume. */
export function LivingWaterMeasure({
  ml,
  maxMl = 5000,
  className,
  showLabel = true,
  size = 'lg',
}: LivingWaterMeasureProps) {
  const reduce = useReducedMotion()
  const safeMl = Math.max(0, ml)
  const pct = Math.min(100, (safeMl / maxMl) * 100)
  const liters = mlToLiters(safeMl)

  return (
    <div
      className={cn(
        'relative flex min-w-0 flex-col items-center',
        size === 'lg' ? 'w-full max-w-[220px]' : 'w-full max-w-[140px]',
        className
      )}
      role="img"
      aria-label={`Estimated daily water ${formatVolume(liters, 1)} liters`}
    >
      {/* tick marks */}
      <div
        className="pointer-events-none absolute inset-y-8 left-0 hidden w-8 flex-col justify-between font-measure text-[10px] text-ink-3 sm:flex"
        aria-hidden="true"
      >
        <span>5 L</span>
        <span>2.5</span>
        <span>0</span>
      </div>

      <div
        className={cn(
          'relative w-[42%] min-w-[88px] overflow-hidden border border-ocean/40 bg-foam/40 shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-foam)_50%,transparent),var(--shadow-soft)] backdrop-blur-[2px] dark:bg-deep-ink/40',
          size === 'lg' ? 'aspect-[1/2.4]' : 'aspect-[1/2.1]',
          'rounded-[var(--radius-vessel)]'
        )}
      >
        {/* glass highlight */}
        <div
          className="pointer-events-none absolute inset-y-3 left-[12%] z-10 w-[14%] rounded-full bg-foam/35"
          aria-hidden="true"
        />

        {/* water fill */}
        <div
          className="absolute inset-x-0 bottom-0 z-0 overflow-hidden"
          style={{
            height: `${pct}%`,
            transition: reduce
              ? 'height var(--dur-level) linear'
              : 'height var(--dur-level) var(--ease-water)',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-aqua/90 via-water/85 to-ocean" />
          {/* surface meniscus */}
          <div
            className={cn(
              'absolute inset-x-[-10%] top-0 h-3 rounded-[50%] bg-aqua/80',
              !reduce && 'animate-[wave_4s_ease-in-out_infinite]'
            )}
            style={{ boxShadow: '0 0 12px color-mix(in srgb, var(--color-aqua) 50%, transparent)' }}
          />
        </div>

        {/* empty state cue */}
        {safeMl < 1 && (
          <div className="absolute inset-0 grid place-items-center px-2 text-center font-measure text-[10px] uppercase tracking-wider text-ink-3">
            Set values
          </div>
        )}
      </div>

      {showLabel && (
        <div className="mt-4 text-center">
          <p className="font-measure text-xs uppercase tracking-[0.14em] text-ink-3">
            Daily estimate
          </p>
          <p className="mt-1 font-heading text-[length:var(--text-display-s)] font-semibold tracking-tight text-ink tabular-nums">
            <span className="tabular-nums">{formatVolume(liters, 1)}</span>
            <span className="ml-1 font-measure text-lg font-normal text-ocean">
              L
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
