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
    <header className={cn('max-w-5xl', className)}>
      <Balancer
        as={tag}
        className="font-heading text-4xl tracking-tight text-foreground [word-spacing:4px] md:text-6xl"
      >
        {title}
      </Balancer>
      {intro && (
        <p className="mt-6 text-xl font-medium text-gray-500 md:text-2xl">
          {intro}
        </p>
      )}
    </header>
  )
}
