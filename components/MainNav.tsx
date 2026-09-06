'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

import { MainNavItem } from 'types'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Logo from '@/components/Logo'
import { ThemeToggle } from '@/components/ThemeToggle'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function isActive(href: string) {
    if (href.startsWith('/#')) return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={cn(
        'isolate mx-auto flex max-w-[1400px] items-center justify-between gap-3 py-3 transition-[padding] duration-[var(--dur-mid)]',
        scrolled ? 'py-2.5' : 'py-3'
      )}
      aria-label="Global"
      data-scrolled={scrolled || undefined}
    >
      <Link
        href="/"
        className="rounded-[var(--radius-button)] transition-opacity duration-[var(--dur-short)] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        <div className="flex items-center gap-2">
          <Logo />
          <span className="hidden font-heading text-sm font-semibold tracking-tight text-ink sm:inline-block md:text-base">
            {siteConfig.siteName}
          </span>
        </div>
      </Link>
      <div className="flex items-center gap-1 sm:gap-2">
        {items?.length ? (
          <div className="flex flex-row gap-0.5 sm:gap-1">
            {items.map((item, index) => (
              <Link
                key={item.href}
                href={item.disabled ? '#' : item.href}
                className={cn(
                  'relative whitespace-nowrap px-2.5 py-2 font-heading text-sm font-medium tracking-tight transition-colors duration-[var(--dur-short)] sm:px-3 md:text-base',
                  isActive(item.href) ? 'text-ink' : 'text-ink-2',
                  item.disabled && 'cursor-not-allowed opacity-80',
                  'rounded-[var(--radius-button)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus'
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-x-1 bottom-1 h-px bg-ocean"
                      layoutId="navWaterline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{item.title}</span>
              </Link>
            ))}
          </div>
        ) : null}
        <ThemeToggle />
      </div>
    </nav>
  )
}
