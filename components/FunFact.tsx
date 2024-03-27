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
        'group relative mx-auto my-8 w-full max-w-xs rounded-xl bg-gray-100 p-6 shadow-xl md:w-56',
        align === 'left' && 'md:float-start md:mr-14 md:-rotate-12',
        align === 'right' && 'md:float-end md:ml-14 md:rotate-12'
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
      <h4 className="mb-2 mt-0 font-heading text-lg capitalize">
        FUN FACT: {title}
      </h4>
      <p className="mb-0 mt-2 text-sm !text-foreground">{children}</p>
    </div>
  )
}
