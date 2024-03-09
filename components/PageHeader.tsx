import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

export function PageHeader({
  title,
  intro,
  className,
}: {
  title: string
  intro: string
  className: string
}) {
  return (
    <header className={cn('max-w-5xl', className)}>
      <Balancer
        as="h1"
        className="font-heading text-4xl tracking-tight text-stone-800 [word-spacing:4px] sm:text-5xl"
      >
        {title}
      </Balancer>
      <p className="mt-6 text-2xl font-medium text-stone-500">{intro}</p>
    </header>
  )
}
