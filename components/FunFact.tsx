import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { WaterDrop3D } from '@/components/craft/WaterDrop3D'

interface FunFactProps {
  title: string
  children?: ReactNode
  align?: 'left' | 'right'
  icon?: 'cup' | 'bottle'
}

export function FunFact({ title, children, ...props }: FunFactProps) {
  return (
    <aside
      className={cn(
        'my-6 w-full min-w-0 rounded-[var(--radius-panel)] border border-rule bg-surface p-5 md:p-6'
      )}
      {...props}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <p className="text-base font-semibold text-ocean">
          Fun fact
        </p>
        <WaterDrop3D size={36} animated={false} className="shrink-0 opacity-80" />
      </div>
      <h4 className="mb-2 mt-0 font-heading text-lg font-bold capitalize tracking-tight text-ink md:text-xl">
        {title}
      </h4>
      <div className="text-base leading-relaxed text-ink-2 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-ink">
        {children}
      </div>
    </aside>
  )
}
