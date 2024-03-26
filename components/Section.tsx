import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionProps {
  innerContainer?: boolean
  children: ReactNode
  className?: string
}

export function Section({ innerContainer, children, ...props }: SectionProps) {
  return (
    <>
      {innerContainer && (
        <section {...props}>
          <div
            className={cn(
              'container prose mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-20'
            )}
          >
            {children}
          </div>
        </section>
      )}
      {!innerContainer && (
        <section
          {...props}
          className={cn(
            'container prose mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-20'
          )}
        >
          {children}
        </section>
      )}
    </>
  )
}
