import type { Metadata } from 'next'
import { Figtree, Gabarito } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'

import { siteConfig } from '@/config/site'
import { absoluteUrl, cn } from '@/lib/utils'

import '@/styles/globals.css'

import LogoJsonLd from '@/components/StructuredData/LogoJsonLd'

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-gabarito',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  metadataBase: siteConfig.url,
  alternates: {
    canonical: '/',
  },
  authors: [
    {
      name: 'Yuyu',
      url: 'https://www.yuurrific.com',
    },
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.openGraph.image,
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: siteConfig.openGraph.imageAlt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon-32x32.png',
    shortcut: '/images/apple-touch-icon.png',
    apple: '/images/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.creator,
    images: [siteConfig.openGraph.image],
  },
  robots: {
    index: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'antialiased',
        gabarito.variable,
        figtree.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;d.classList.remove('dark');if(t==='dark'){d.classList.add('dark');d.setAttribute('data-theme','dark')}else if(t==='light'){d.setAttribute('data-theme','light')}else{d.removeAttribute('data-theme');if(window.matchMedia('(prefers-color-scheme: dark)').matches)d.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="//ik.imagekit.io" />
        <link rel="dns-prefetch" href="//ik.imagekit.io" />
        <LogoJsonLd
          logo={absoluteUrl('/images/logo.png')}
          url={absoluteUrl('/')}
        />
        <Script
          id="simple-analytics"
          dangerouslySetInnerHTML={{
            __html: `window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};`,
          }}
        />
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="c2fbac7b-0b09-48f0-b925-7a5a61de2a3b"
          async
        />
        <Script
          src="https://cdn.seline.com/seline.js"
          data-token="dcf6d3916400d19"
          async
        />
      </head>
      <body
        className={cn(
          figtree.className,
          'flex min-h-screen flex-col bg-mist font-sans text-ink dark:bg-paper'
        )}
        suppressHydrationWarning
      >
        {children}
        <noscript>
          <Image
            src="https://stats.wateraday.com/noscript.gif?collect-dnt=true"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
            width="1"
            height="1"
            unoptimized
          />
        </noscript>
      </body>
    </html>
  )
}
