import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const proseVariants = cva(
  'prose max-w-none font-sans text-base prose-p:text-base prose-li:text-base prose-headings:font-heading prose-headings:tracking-tight prose-h1:font-bold prose-h2:font-bold prose-h2:capitalize prose-a:text-accent',
  {
    variants: {
      theme: {
        light: '',
        dark: 'prose-h1:text-band-ink prose-h2:text-band-ink prose-h3:text-band-ink prose-p:text-band-muted prose-strong:text-band-ink prose-li:text-band-muted prose-li:marker:text-band-ink prose-th:text-band-ink prose-td:text-band-muted',
      },
    },
    defaultVariants: {
      theme: 'light',
    },
  }
)

export interface ProseProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof proseVariants> {}

export function Prose({ children, theme, className, ...props }: ProseProps) {
  return (
    <div className={cn(proseVariants({ theme, className }))} {...props}>
      {children}
    </div>
  )
}
