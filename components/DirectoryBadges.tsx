import { directoryBadges } from '@/config/directory-badges'

/**
 * Compact horizontal-scroll strip of directory badges.
 * Maintain the list in `config/directory-badges.ts`.
 */
export function DirectoryBadges() {
  if (directoryBadges.length === 0) return null

  return (
    <div className="min-w-0">
      <p className="sr-only">Featured on</p>
      <ul
        role="list"
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5"
        aria-label="Directory badges"
      >
        {directoryBadges.map((badge) => (
          <li key={badge.href} className="snap-start shrink-0">
            <a
              href={badge.href}
              target="_blank"
              rel={badge.rel ?? 'noopener noreferrer'}
              className="inline-flex h-9 items-center rounded-[var(--radius-button)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- remote SVG badges */}
              <img
                src={badge.src}
                alt={badge.alt}
                width={badge.width ?? 160}
                height={badge.height ?? 40}
                loading="lazy"
                decoding="async"
                className="h-9 w-auto max-w-[11rem] object-contain object-left"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
