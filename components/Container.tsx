import type { ElementType } from 'react'

import { cn } from '@/lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType
}

export function Container({
  as: Comp = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Comp {...props} className={cn('mx-auto my-0 w-full max-w-7xl', className)}>
      {children}
    </Comp>
  )
}
