'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { cn } from '@/lib/utils'

type ThemeMode = 'system' | 'light' | 'dark'

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement
  root.classList.remove('dark')
  if (mode === 'dark') {
    root.classList.add('dark')
    root.setAttribute('data-theme', 'dark')
  } else if (mode === 'light') {
    root.setAttribute('data-theme', 'light')
  } else {
    root.removeAttribute('data-theme')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.add('dark')
    }
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  const [mode, setMode] = useState<ThemeMode>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = (localStorage.getItem('theme') as ThemeMode | null) ?? 'system'
    setMode(stored)
    applyTheme(stored)
    setMounted(true)

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const current = (localStorage.getItem('theme') as ThemeMode | null) ?? 'system'
      if (current === 'system') applyTheme('system')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  function cycle() {
    const next: ThemeMode =
      mode === 'system' ? 'light' : mode === 'light' ? 'dark' : 'system'
    setMode(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  const label =
    mode === 'system' ? 'System theme' : mode === 'light' ? 'Light theme' : 'Dark theme'
  const Icon = mode === 'dark' ? Moon : mode === 'light' ? Sun : Monitor

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${label}. Click to change.`}
      title={label}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-[var(--radius-button)] border border-rule bg-surface text-ink-2 transition-[transform,background-color,color,border-color,box-shadow] duration-[var(--dur-short)] ease-[var(--ease-out)] hover:-translate-y-px hover:border-accent hover:bg-accent-soft hover:text-ink hover:shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:translate-y-0',
        !mounted && 'opacity-0',
        className
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  )
}
