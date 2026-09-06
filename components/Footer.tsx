import Link from 'next/link'

import { ConversionMetrics } from '@/config/metrics'
import { getMetricFromSlug } from '@/lib/metrics'
import { DirectoryBadges } from '@/components/DirectoryBadges'

const footerLinks = [
  {
    name: 'liters to gallons',
    href: '/volume/liter/us-liquid-gallon',
  },
  {
    name: 'gallons to liters',
    href: '/volume/us-liquid-gallon/liter',
  },
  {
    name: 'ml to cups',
    href: '/volume/milliliter/us-legal-cup',
  },
  { name: 'cups to ml', href: '/volume/us-legal-cup/milliliter' },
  { name: 'tablespoons to cups', href: '/volume/us-tablespoon/us-legal-cup' },
  { name: 'cups to tablespoons', href: '/volume/us-legal-cup/us-tablespoon' },
  {
    name: 'ml to l',
    href: '/volume/milliliter/liter',
  },
  { name: 'l to ml', href: '/volume/liter/milliliter' },
  { name: 'teaspoon to ml', href: '/volume/us-teaspoon/milliliter' },
  {
    name: 'ml to teaspoon',
    href: '/volume/milliliter/us-teaspoon',
  },
  {
    name: 'liters to quarts',
    href: '/volume/liter/us-liquid-quart',
  },
  { name: 'quarts to liters', href: '/volume/us-liquid-quart/liter' },
  { name: 'cups to liters', href: '/volume/us-legal-cup/liter' },
  {
    name: 'liters to cups',
    href: '/volume/liter/us-legal-cup',
  },
  { name: 'pint to ml', href: '/volume/us-liquid-pint/milliliter' },
  {
    name: 'ml to pint',
    href: '/volume/milliliter/us-liquid-pint',
  },
  {
    name: 'cubic feet to gallons',
    href: '/volume/cubic-foot/us-liquid-gallon',
  },
  {
    name: 'gallons to cubic feet',
    href: '/volume/us-liquid-gallon/cubic-foot',
  },
  {
    name: 'cubic inches to gallons',
    href: '/volume/cubic-inch/us-liquid-gallon',
  },
  {
    name: 'gallons to cubic inches',
    href: '/volume/us-liquid-gallon/cubic-inch',
  },
  { name: 'cubic inches to liters', href: '/volume/cubic-inch/liter' },
  {
    name: 'liters to cubic inches',
    href: '/volume/liter/cubic-inch',
  },
  { name: 'cups to quart', href: '/volume/us-legal-cup/us-liquid-quart' },
  { name: 'quart to cups', href: '/volume/us-liquid-quart/us-legal-cup' },
  { name: 'cups to gallons', href: '/volume/us-legal-cup/us-liquid-gallon' },
  { name: 'gallons to cups', href: '/volume/us-liquid-gallon/us-legal-cup' },
  { name: 'pint to cups', href: '/volume/us-liquid-pint/us-legal-cup' },
  { name: 'cups to pint', href: '/volume/us-legal-cup/us-liquid-pint' },
  {
    name: 'quart to gallons',
    href: '/volume/us-liquid-quart/us-liquid-gallon',
  },
  {
    name: 'gallons to quart',
    href: '/volume/us-liquid-gallon/us-liquid-quart',
  },
  { name: 'gallons to ml', href: '/volume/us-liquid-gallon/milliliter' },
  { name: 'ml to gallons', href: '/volume/milliliter/us-liquid-gallon' },
  { name: 'liter to ounces', href: '/volume/liter/us-fluid-ounce' },
  { name: 'ounces to liter', href: '/volume/us-fluid-ounce/liter' },
  { name: 'pints to liters', href: '/volume/us-liquid-pint/liter' },
  {
    name: 'liters to pints',
    href: '/volume/liter/us-liquid-pint',
  },
  { name: 'pints to gallons', href: '/volume/us-liquid-pint/us-liquid-gallon' },
  { name: 'gallons to pints', href: '/volume/us-liquid-gallon/us-liquid-pint' },
]

type Project = {
  url: string
  name: string
  target: '_blank' | '_self'
}

const projects: Project[] = [
  {
    url: 'https://pfpresizer.com/?ref=wateraday.com',
    name: 'PFP Resizer',
    target: '_blank',
  },
  {
    url: 'https://termbreaks.com/?ref=wateraday.com',
    name: 'Term Breaks',
    target: '_blank',
  },
  {
    url: 'https://colormapper.xyz/?ref=wateraday.com',
    name: 'Color Mapper',
    target: '_blank',
  },
  {
    url: 'https://www.rgbtopantone.com/?ref=wateraday.com',
    name: 'RGB to Pantone',
    target: '_blank',
  },
  {
    url: 'https://www.randomnumberapp.com/?ref=wateraday.com',
    name: 'Random Number App',
    target: '_blank',
  },
  {
    url: 'https://www.clinicgeek.com/?ref=wateraday.com',
    name: 'Clinic Geek',
    target: '_blank',
  },
  {
    url: 'https://www.indieworldmap.com/?ref=wateraday.com',
    name: 'Indie World Map',
    target: '_blank',
  },
  {
    url: 'https://www.willitraintomorrow.com/?ref=wateraday.com',
    name: 'Will It Rain Tomorrow?',
    target: '_blank',
  },
  {
    url: 'https://hiddengems.lol/?ref=wateraday.com',
    name: 'Hidden Gems',
    target: '_blank',
  }
]

function unitMark(slug: string) {
  const metric = getMetricFromSlug(slug, ConversionMetrics)
  if (!metric) return slug
  const abbr = metric.abbreviations?.split(',')[0]?.trim() ?? metric.name
  return abbr.replace(/<[^>]+>/g, '').toUpperCase()
}

function parseVolumeHref(href: string) {
  const parts = href.split('/')
  // /volume/[from]/[to]
  const fromSlug = parts[2] ?? ''
  const toSlug = parts[3] ?? ''
  return { fromSlug, toSlug }
}

export function Footer() {
  const featured = footerLinks.slice(0, 8)
  const rest = footerLinks.slice(8)

  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Popular conversions - deep water band */}
      <div className="bg-band text-band-ink">
        <div className="mx-auto max-w-350 px-4 py-14 md:px-8 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h3 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-foam">
              Popular volume conversions
            </h3>
            <Link
              href="/volume-converter"
              className="text-base font-semibold text-aqua underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              Open full converter
            </Link>
          </div>

          {/* Featured measure pairs */}
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-12 md:gap-4"
          >
            {featured.map((item) => {
              const { fromSlug, toSlug } = parseVolumeHref(item.href)
              return (
                <li key={item.href} className="min-w-0">
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col justify-between border border-band-muted/35 bg-deep-ink/40 px-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus md:px-5 md:py-6"
                  >
                    <span className="font-heading text-[clamp(1.35rem,3vw,1.85rem)] font-bold leading-none tracking-tight text-foam group-hover:text-aqua">
                      <span className="tabular-nums">{unitMark(fromSlug)}</span>
                      <span className="mx-1.5 font-measure text-[0.55em] font-normal text-band-muted">
                        →
                      </span>
                      <span className="tabular-nums">{unitMark(toSlug)}</span>
                    </span>
                    <span className="mt-3 text-base text-band-muted group-hover:text-ice">
                      {item.name}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Remaining SEO links as compact measure flows */}
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-band-muted/30 pt-8 sm:grid-cols-2 md:mt-10 md:grid-cols-3 lg:grid-cols-4"
          >
            {rest.map((item) => {
              const { fromSlug, toSlug } = parseVolumeHref(item.href)
              return (
                <li key={item.href} className="min-w-0">
                  <Link
                    href={item.href}
                    className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    <span className="font-measure text-sm uppercase tracking-wide text-aqua">
                      {unitMark(fromSlug)}
                      <span className="mx-1 text-band-muted/60">→</span>
                      {unitMark(toSlug)}
                    </span>
                    <span className="mt-0.5 block text-base capitalize text-band-muted group-hover:text-foam">
                      {item.name}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Other projects - ice / surface band */}
      <div className="border-t border-rule bg-ice dark:bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-16">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Other projects
          </h3>
          <p className="mt-2 max-w-[45ch] text-base text-ink-2">
            Tools and sites from the same maker.
          </p>

          <ul role="list" className="mt-8 border-t border-rule">
            {projects.map((item) => (
              <li key={item.name} className="border-b border-rule/80">
                <a
                  href={item.url}
                  target={item.target}
                  rel={
                    item.target === '_blank'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group flex items-baseline justify-between gap-4 py-4 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                  <span className="font-heading text-lg font-bold tracking-tight group-hover:text-ocean md:text-xl">
                    {item.name}
                  </span>
                  <span
                    className="shrink-0 font-measure text-sm uppercase tracking-wider text-ink-3 group-hover:text-ocean"
                    aria-hidden
                  >
                    Visit
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Colophon */}
      <div className="border-t border-rule bg-foam dark:bg-surface">
        <div className="mx-auto max-w-[1400px] space-y-6 px-4 py-8 md:px-8">
          <DirectoryBadges />
          <p className="text-base leading-relaxed text-ink-2">
            &copy; {new Date().getFullYear()} wateraday.com.
            <span className="ml-2 inline-block">
              Built by{' '}
              <a
                href="https://www.yuurrific.com"
                className="font-semibold text-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yuurrific
              </a>
              .
            </span>
            <span className="mt-2 block md:ml-2 md:mt-0 md:inline-block">
              Privacy-friendly analytics by{' '}
              <a
                href="https://go.yuurrific.com/seline"
                className="font-semibold text-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
              >
                Seline
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
