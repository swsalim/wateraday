import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Bottle, Cup } from '@/components/icons'

interface FunFactProps {
  title: string
  children?: ReactNode
  align?: 'left' | 'right'
  icon?: 'cup' | 'bottle'
}

export function FunFact({
  title,
  align = 'right',
  icon = 'cup',
  children,
  ...props
}: FunFactProps) {
  return (
    <div
      className={cn(
        'group relative w-56 rounded-xl bg-stone-100 p-6 shadow-xl',
        align === 'left' && 'float-start mr-14 -rotate-12',
        align === 'right' && 'float-end ml-14 rotate-12'
      )}
    >
      <div className="absolute -left-4 -top-4 rounded-full border-1 border-primary bg-background p-2 shadow-md">
        {icon === 'cup' && (
          <Cup className="size-8 text-background transition group-hover:-rotate-12" />
        )}
        {icon === 'bottle' && (
          <Bottle className="size-8 text-background transition group-hover:rotate-12" />
        )}
      </div>
      <h4 className="mb-2 mt-0 font-heading text-lg capitalize">
        FUN FACT: {title}
      </h4>
      <p className="mb-0 mt-2 text-sm">{children}</p>
    </div>
  )
}
