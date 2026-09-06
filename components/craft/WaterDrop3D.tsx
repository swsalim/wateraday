import { cn } from '@/lib/utils'

interface WaterDrop3DProps {
  className?: string
  size?: number
  animated?: boolean
}

/** Hand-built Tier-B SVG — dimensional water droplet with specular highlight */
export function WaterDrop3D({
  className,
  size = 120,
  animated = true,
}: WaterDrop3DProps) {
  const id = 'wd3d'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'overflow-visible',
        animated && 'animate-float motion-reduce:animate-none',
        className
      )}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="30" y1="10" x2="90" y2="130">
          <stop offset="0%" stopColor="var(--color-lagoon)" stopOpacity="0.95" />
          <stop offset="45%" stopColor="var(--color-accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-deep)" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id={`${id}-shine`} cx="38%" cy="28%" r="45%">
          <stop offset="0%" stopColor="white" stopOpacity="0.85" />
          <stop offset="55%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="8"
            floodColor="var(--color-deep)"
            floodOpacity="0.28"
          />
        </filter>
      </defs>
      <path
        d="M60 8C60 8 18 58 18 88C18 112.3 36.7 132 60 132C83.3 132 102 112.3 102 88C102 58 60 8 60 8Z"
        fill={`url(#${id}-body)`}
        filter={`url(#${id}-soft)`}
      />
      <path
        d="M60 8C60 8 18 58 18 88C18 112.3 36.7 132 60 132C83.3 132 102 112.3 102 88C102 58 60 8 60 8Z"
        fill={`url(#${id}-shine)`}
      />
      <ellipse
        cx="44"
        cy="72"
        rx="10"
        ry="18"
        fill="white"
        fillOpacity="0.22"
        transform="rotate(-18 44 72)"
      />
      <circle cx="72" cy="98" r="5" fill="white" fillOpacity="0.18" />
    </svg>
  )
}
