import type { Metadata } from 'next'

import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'
import { Footer } from '@/components/Footer'
import { MainNav } from '@/components/MainNav'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
}

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rule/60 bg-mist/80 px-4 backdrop-blur-md dark:bg-paper/80 md:px-8">
        <MainNav items={marketingConfig.mainNav} />
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  )
}
