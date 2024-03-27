import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionProps {
  innerContainer?: boolean
  children: ReactNode
  className?: string
  theme?: 'dark' | 'light'
}

const classes = {
  container:
    'container prose mx-auto max-w-3xl px-6 py-12 prose-h2:mt-0 prose-h2:text-center prose-h2:capitalize md:px-8 md:py-20',
  light: '',
  dark: 'prose-h2:text-blue-50 prose-p:text-blue-200 prose-strong:text-blue-50 prose-li:text-blue-200 prose-li:marker:text-blue-50 prose-th:text-blue-50 prose-td:text-blue-100',
}

export function Section({
  innerContainer,
  theme = 'light',
  children,
  ...props
}: SectionProps) {
  return (
    <>
      {innerContainer && (
        <section className={cn(theme === 'dark' && 'bg-blue-950')} {...props}>
          <div
            className={cn(
              classes.container,
              theme === 'light' && classes.light,
              theme === 'dark' && classes.dark
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
            classes.container,
            theme === 'light' && '',
            theme === 'dark' && classes.dark
          )}
        >
          {children}
        </section>
      )}
    </>
  )
}
