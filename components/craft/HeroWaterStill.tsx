'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { WaterDrop3D } from '@/components/craft/WaterDrop3D'

interface HeroWaterStillProps {
  className?: string
  priority?: boolean
}

/** 3D glass still + floating droplet craft composite */
export function HeroWaterStill({ className, priority }: HeroWaterStillProps) {
  return (
    <figure
      className={cn(
        'group relative mx-auto aspect-square w-full max-w-md min-w-0',
        className
      )}
    >
      <div className="absolute inset-6 rounded-full bg-accent-soft/40 blur-2xl transition-opacity duration-[var(--dur-mid)] ease-[var(--ease-out)] group-hover:opacity-80 dark:bg-accent-soft/25" />
      <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-rule bg-glass shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-[var(--dur-mid)] ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lift)]">
        <Image
          src="/images/hero-water-glass-3d.png"
          alt="Clear glass of water with soft caustic light"
          width={800}
          height={800}
          priority={priority}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 90vw, 400px"
        />
      </div>
      <div className="absolute -right-2 -top-4 md:right-2 md:top-0">
        <WaterDrop3D size={72} />
      </div>
    </figure>
  )
}
