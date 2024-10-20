import type { ElementType } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const wrapperVariants = cva('mx-auto my-0 px-6 lg:px-8 w-full', {
  variants: {
    size: {
      default: 'py-12 md:py-20',
      sm: 'py-6 md:py-10',
      lg: 'py-16 md:py-28',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface WrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof wrapperVariants> {
  as?: ElementType
  hasInnerContainer?: boolean
}

export function Wrapper({
  as: Comp = 'section',
  className,
  size,
  children,
  ...props
}: WrapperProps) {
  return (
    <Comp {...props} className={cn(wrapperVariants({ size, className }))}>
      {children}
    </Comp>
  )
}
