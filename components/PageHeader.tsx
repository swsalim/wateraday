import React from 'react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

export function PageHeader({
  tag = 'h1',
  title,
  intro,
  className,
}: {
  tag?: React.ElementType
  title: string
  intro?: string
  className: string
}) {
  return (
    <header className={cn('max-w-3xl min-w-0', className)}>
      <Balancer
        as={tag}
        className="font-heading text-[length:var(--text-display-s)] font-semibold capitalize tracking-[-0.02em] text-ink [overflow-wrap:anywhere] md:text-[length:var(--text-display)]"
      >
        {title}
      </Balancer>
      {intro && (
        <p className="mt-4 max-w-prose text-lg font-normal text-ink-2 md:text-xl">
          {intro}
        </p>
      )}
    </header>
  )
}
