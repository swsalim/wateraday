/**
 * Directory / launch-site badges for reciprocal backlinks.
 * Add or remove entries here - the footer strip picks them up automatically.
 */
export type DirectoryBadge = {
  href: string
  src: string
  alt: string
  /** Intrinsic width hint (px). Height is capped in CSS. */
  width?: number
  height?: number
  rel?: string
}

export const directoryBadges: DirectoryBadge[] = [
  {
    href: 'https://easydofollow.dev/other/how-much-water-should-you-drink-daily',
    src: 'https://easydofollow.dev/badge/easydofollow-badge-light.svg',
    alt: 'Featured on EasyDoFollow',
    width: 188,
    height: 56,
    rel: 'noopener',
  },
  {
    href: 'https://daniellaunches.com',
    src: 'https://daniellaunches.com/badge-light.svg',
    alt: 'Featured on DanielLaunches',
    width: 220,
    height: 48,
  },
  {
    href: 'https://lemonlaunch.dev/other/how-much-water-should-you-drink-daily',
    src: 'https://lemonlaunch.dev/badge/lemonlaunch-badge-light.svg',
    alt: 'Featured on LemonLaunch',
    width: 188,
    height: 56,
    rel: 'noopener',
  },
  {
    href: 'https://easylaunch.dev/other/how-much-water-should-you-drink-daily',
    src: 'https://easylaunch.dev/badge/easylaunch-badge-light.svg',
    alt: 'Featured on EasyLaunch',
    width: 188,
    height: 56,
    rel: 'noopener',
  },
  {
    href: 'https://twelve.tools',
    src: 'https://twelve.tools/badge0-white.svg',
    alt: 'Featured on Twelve Tools',
    width: 148,
    height: 40,
  },
  {
    href: 'https://www.listbulb.com/tools/wateraday',
    src: 'https://www.listbulb.com/featured-on-listbulb-light.svg',
    alt: 'Featured on ListBulb',
    width: 200,
    height: 40,
    rel: 'noopener',
  },
  {
    href: 'https://buildlist.io',
    src: 'https://buildlist.io/badge.svg',
    alt: 'Featured on Buildlist',
    width: 160,
    height: 40,
    rel: 'noopener',
  },
  {
    href: 'https://launchpadly.co/startup/water-a-day?ref=badge',
    src: 'https://launchpadly.co/embed/badges/startup/water-a-day.svg?variant=listed-on',
    alt: 'Launchpadly Startup Directory',
    width: 260,
    height: 48,
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://nicklaunches.com/products/water-a-day/?utm_source=wateraday.com&utm_medium=badge&utm_campaign=featured',
    src: 'https://nicklaunches.com/badges/featured.png',
    alt: 'Water a Day on Nick Launches',
    width: 244,
    height: 56,
    rel: 'noopener',
  },
  {
    href: 'https://confettisaas.com/saas/wateraday-com?ref=badge',
    src: 'https://confettisaas.com/badge-light.svg',
    alt: 'Water a Day on ConfettiSaaS',
    width: 250,
    height: 54,
    rel: 'noopener',
  },
  {
    href: 'https://launchstreak.dev/other/how-much-water-should-you-drink-daily',
    src: 'https://launchstreak.dev/badge/launch-streak-badge-light.svg',
    alt: 'Launched on Launch Streak',
    width: 248,
    height: 68,
    rel: 'noopener',
  },
]
