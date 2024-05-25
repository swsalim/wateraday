import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// interface SectionProps {
//   innerContainer?: boolean
//   children: ReactNode
//   className?: string
//   theme?: 'dark' | 'light'
// }

const sectionVariants = cva('prose prose-h2:capitalize', {
  variants: {
    theme: {
      light: '',
      dark: 'bg-blue-950 prose-h2:text-blue-50 prose-h3:text-blue-100 prose-p:text-blue-200 prose-strong:text-blue-50 prose-li:text-blue-200 prose-li:marker:text-blue-50 prose-th:text-blue-50 prose-td:text-blue-100',
    },
    size: {
      default: 'py-12 md:py-20',
      sm: 'py-6 md:py-10',
      lg: 'py-16 md:py-28',
    },
  },
  defaultVariants: {
    theme: 'light',
    size: 'default',
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export function Section({
  theme = 'light',
  className,
  size,
  children,
  ...props
}: SectionProps) {
  return (
    <>
      <section
        {...props}
        className={cn(sectionVariants({ theme, size, className }))}
      >
        <div className="container my-0">{children}</div>
      </section>
    </>
  )
}
