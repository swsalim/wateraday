import type { ElementType } from 'react'

import { cn } from '@/lib/utils'

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {}

export function Panel({ className, children, ...props }: PanelProps) {
  return (
    <div
      {...props}
      className={cn(
        'w-full overflow-hidden rounded-xl border border-solid border-gray-200 p-6 shadow-lg md:p-8',
        className
      )}
    >
      {children}
    </div>
  )
}
