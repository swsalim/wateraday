import type { Metadata } from 'next'

import { pagesConfig } from '@/config/pages'
import { siteConfig } from '@/config/site'
import { Footer } from '@/components/Footer'
import { MainNav } from '@/components/MainNav'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

interface CategoryLayoutProps {
  children: React.ReactNode
}

export default function CategoryLayout({ children }: CategoryLayoutProps) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b-[1px] border-b-slate-300/80 bg-slate-50/50 px-4 backdrop-blur backdrop-saturate-150 md:px-8">
        <MainNav items={pagesConfig.mainNav} />
      </header>
      <main className="flex h-screen flex-1 overflow-hidden py-4 md:py-8">
        {children}
      </main>
      <Footer />
    </>
  )
}
