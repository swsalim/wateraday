import { cn } from '@/lib/utils'

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {}

export function Panel({ className, children, ...props }: PanelProps) {
  return (
    <div
      {...props}
      className={cn(
        'w-full min-w-0 overflow-hidden rounded-[var(--radius-panel)] border border-rule bg-surface p-6 md:p-8',
        className
      )}
    >
      {children}
    </div>
  )
}
