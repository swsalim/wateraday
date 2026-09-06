import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-heading font-semibold tracking-tight rounded-[var(--radius-button)] transition-[background-color,border-color,color,opacity,transform,box-shadow] duration-[var(--dur-short)] ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50 data-[state=loading]:opacity-70 data-[state=error]:border-red-600 data-[state=error]:text-red-700 data-[state=success]:bg-accent data-[state=success]:text-accent-ink hover:-translate-y-px active:translate-y-0',
  {
    variants: {
      variant: {
        primary:
          'border border-transparent bg-accent text-accent-ink shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:brightness-105',
        secondary:
          'border border-rule bg-surface text-ink hover:border-accent/50 hover:bg-paper-2 hover:shadow-[var(--shadow-soft)]',
        outline:
          'border border-rule bg-transparent text-ink-2 hover:border-accent/50 hover:bg-paper-2 hover:text-ink',
        ghost:
          'border border-transparent bg-transparent text-ink-2 hover:bg-paper-2 hover:text-ink',
        danger:
          'border border-transparent bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        default: 'px-5 py-2.5 text-sm',
        full: 'w-full px-5 py-2.5 text-sm',
        medium: 'px-8 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
