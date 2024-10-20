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
        'group relative mx-auto my-8 w-full rounded-xl border border-solid border-gray-200 bg-white p-6 shadow-xl'
      )}
      {...props}
    >
      <div className="absolute -left-6 -top-6 rounded-full border-1 border-blue-600 bg-blue-200 p-2 shadow-md md:-left-4 md:-top-4">
        {icon === 'cup' && (
          <Cup className="size-8 text-background transition group-hover:-rotate-12" />
        )}
        {icon === 'bottle' && (
          <Bottle className="size-8 text-background transition group-hover:rotate-12" />
        )}
      </div>
      <div className="mb-2 inline-block rounded-full bg-blue-400/80 px-3 py-2 text-center text-sm font-semibold uppercase text-blue-50">
        FUN FACT
      </div>
      <h4 className="mb-2 mt-0 font-heading text-lg capitalize md:text-2xl">
        {title}
      </h4>
      <div className="mb-0 mt-4 rounded-sm bg-gray-100 px-6 py-4 text-sm !text-foreground">
        {children}
      </div>
    </div>
  )
}
