import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { DailyWaterHero } from '@/components/DailyWaterHero'
import { WaveDivider } from '@/components/craft/WaveDivider'
import { BodyWaterStory } from '@/components/home/BodyWaterStory'
import { DailyGuidelines } from '@/components/home/DailyGuidelines'
import { HomeConverter } from '@/components/home/HomeConverter'
import { HydrationBalance } from '@/components/home/HydrationBalance'
import { MeasurementWall } from '@/components/home/MeasurementWall'
import { WaterFactors } from '@/components/home/WaterFactors'
import { YourDayInWater } from '@/components/home/YourDayInWater'
import WebsiteJsonLd from '@/components/StructuredData/WebsiteJsonLd'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: siteConfig.title,
}

const guides = [
  {
    href: '/dehydration',
    title: 'Dehydration signs',
    body: 'Recognize thirst, urine color, fatigue, and when to seek care.',
  },
  {
    href: '/volume-converter',
    title: 'Volume converter',
    body: 'Convert liters, cups, ounces, gallons, and more with formulas and tables.',
  },
  {
    href: '/#calculator',
    title: 'Daily intake calculator',
    body: 'Estimate your day from weight, height, age, and activity.',
  },
]

export default async function Home() {
  return (
    <>
      <WebsiteJsonLd
        company={siteConfig.siteName}
        url={process.env.NEXT_PUBLIC_BASE_URL!}
      />

      <DailyWaterHero />

      <YourDayInWater />
      <WaveDivider fillClassName="fill-band" />

      <BodyWaterStory />
      <WaveDivider fillClassName="fill-mist dark:fill-paper" />

      <WaterFactors />
      <WaveDivider fillClassName="fill-paper-3" />

      <HydrationBalance />
      <WaveDivider fillClassName="fill-foam dark:fill-surface" />

      <DailyGuidelines />
      <WaveDivider fillClassName="fill-mist dark:fill-paper" />

      <HomeConverter />
      <WaveDivider fillClassName="fill-ice dark:fill-paper-2" />

      <MeasurementWall />
      <WaveDivider fillClassName="fill-band" />

      {/* Guides */}
      <section className="bg-band text-band-ink">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
          <h2 className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-foam">
            Keep learning
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {guides.map((g) => (
              <li key={g.href} className="min-w-0 border-t border-band-muted/40 pt-5">
                <Link
                  href={g.href}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                  <h3 className="font-heading text-xl font-bold text-foam group-hover:text-aqua">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-band-muted">
                    {g.body}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
