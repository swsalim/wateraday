'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

import { MainNavItem } from 'types'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Logo from '@/components/Logo'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav
      className="isolate mx-auto flex items-center justify-between py-4"
      aria-label="Global"
    >
      <Link href="/">
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, y: '0.5rem' }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 40,
              duration: 0.15,
              restDelta: 0.01,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 40,
              duration: 0.15,
              delay: 0.2,
              restDelta: 0.01,
            },
          }}
        >
          <Logo />
          <span className="hidden font-heading tracking-wide text-gray-900 sm:inline-block">
            {siteConfig.siteName}
          </span>
        </motion.div>
      </Link>
      {items?.length ? (
        <div className="flex flex-row gap-2">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'relative px-4 py-2 font-heading text-base tracking-wide transition-colors hover:text-gray-900/80 sm:text-base',
                pathname.startsWith(item.href)
                  ? 'text-gray-900'
                  : 'text-gray-900/70',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-primary/20"
                    layoutId="hoverBackgroundID"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  )
}
