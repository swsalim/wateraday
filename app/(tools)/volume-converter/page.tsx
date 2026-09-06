/* Hallmark · genre: editorial · macrostructure: Workbench · design-system: design.md · designed-as-app */
import type { Metadata } from 'next'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { absoluteUrl } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Container } from '@/components/Container'
import { WaterDrop3D } from '@/components/craft/WaterDrop3D'
import { WaveField } from '@/components/craft/WaveField'
import { PageHeader } from '@/components/PageHeader'
import { Prose } from '@/components/Prose'
import ArticleJsonLd from '@/components/StructuredData/ArticleJsonLd'
import WebsiteJsonLd from '@/components/StructuredData/WebsiteJsonLd'
import { TableConversion } from '@/components/TableConversion'
import { VolumeConverterForm } from '@/components/VolumeConverterForm'
import { Wrapper } from '@/components/Wrapper'

const config = {
  title: 'Liquid Volume Converter',
  description:
    'Convert between barrels, cubic feet, gallons, liters, pints, tablespoons and other metric and imperial liquid volume units',
  url: '/volume-converter',
}

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: config.url,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    images: [
      {
        url: new URL(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`
        ),
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: siteConfig.openGraph.imageAlt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: config.title,
    description: config.description,
    card: 'summary_large_image',
    creator: siteConfig.creator,
    images: [
      {
        url: new URL(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`
        ),
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: siteConfig.openGraph.imageAlt,
      },
    ],
  },
}
export default async function Home() {
  return (
    <>
      <WebsiteJsonLd
        company={siteConfig.siteName}
        url={absoluteUrl('/volume-converter')}
      />
      <ArticleJsonLd
        description={config.description}
        title={config.title}
        cover={absoluteUrl(`/api/og?title=${config.title}`)}
        publishedAt="2022-04-22"
        reviewedBy="Admin"
      />
      <div className="relative overflow-hidden border-b border-rule bg-linear-to-b from-accent-soft/50 via-paper to-paper">
        <WaveField className="bottom-0 h-20 md:h-28" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
          <div className="mb-3 flex items-center gap-3">
            <p className="font-heading text-sm font-semibold tracking-tight text-accent">
              Volume tools
            </p>
            <WaterDrop3D size={28} animated={false} />
          </div>
          <PageHeader
            title="Convert Water Volume"
            intro="Easily convert between various units of volumes in seconds"
            className="text-left"
          />
          <div className="mt-10 w-full min-w-0">
            <div className="grid gap-8 lg:grid-cols-5">
              <div className="min-w-0 lg:col-span-3">
                <VolumeConverterForm />
              </div>
              <div className="grid min-w-0 gap-4 lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>How Many Ounces Are in a Liter?</CardTitle>
                    <CardDescription>
                      Multiply the volume by 33.8141
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-p:mt-0">
                    <p>1 Liter ≈ 33.8141 U.S. Fluid Ounces</p>
                    <p>
                      In the UK, a litre is equivalent to 35.195 imperial fluid
                      ounces. This difference arises because the US fluid ounce
                      is slightly larger than the imperial fluid ounce.
                      Specifically, one US fluid ounce equals 29.5735
                      milliliters, whereas one imperial fluid ounce equals
                      28.4131 milliliters.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What is a Liter?</CardTitle>
                    <CardDescription>Abbreviation: L</CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-p:mt-0">
                    <p>
                      A liter, or litre, is a unit of volume in the metric
                      system. A liter is defined as the volume of a cube that is
                      10 centimeters on a side. There are about 3.785 liters in
                      a U.S. gallon.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What is an Ounce?</CardTitle>
                    <CardDescription>
                      Common abbreviations: fl oz, oz fl
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-p:mt-0">
                    <p>
                      A U.S. fluid ounce is 1/128th of a U.S. gallon. It is not
                      the same as an ounce of weight or an Imperial fluid ounce.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wrapper>
        <Container>
          <Prose>
            <h2>What is Volume?</h2>
            <p>
              Volume is the amount of space consumed by a three-dimensional
              object, liquid, or gas. Volume is often measured using cubic units
              of length, such as the cubic inch, or specially named units such
              as the gallon.
            </p>
            <h3>Fluid Volume</h3>
            <p>
              Fluid volume is the amount of three-dimensional space consumed by
              a fluid substance. Fluid volume measurements are commonly used in
              construction, cooking & baking, science, and math.
            </p>
            <p>
              US customary volume measures include fluid ounces, cups, pints,
              quarts, and gallons. Internationally, fluid volume is measured
              using liters, milliliters, imperial gallons, imperial quarts, and
              imperial pints.
            </p>
          </Prose>
        </Container>
      </Wrapper>
      <Wrapper className="border-t border-rule">
        <Container>
          <Prose>
            <h2>How to Calculate Volume </h2>
            <p>
              The volume of a regular shaped object can be calculated by
              measuring the sides of the object and applying a mathematical
              formula. If you&apos;re trying to calculate volume, check out our
              volume calculator to calculate several shapes. Finding the volume
              enclosed in an irregular shape can be more difficult. One method
              for finding the volume of an irregular shape is to use a technique
              called displacement. Using displacement, an object is placed in a
              container of liquid and the amount of liquid displaced is
              measured, this is the volume of the object.
            </p>
          </Prose>
        </Container>
      </Wrapper>
      <Wrapper className="border-t border-rule">
        <Container>
          <Prose>
            <h2>How to Convert Units of Volume</h2>
            <p>
              There are two steps to convert a unit of volume to a different
              unit. First, you&apos;ll need to find the conversion ratio, which
              is the rate of one unit to another. Check out the{' '}
              <Link href="#conversion-table">conversion tables</Link> below for
              a complete list of conversion ratios. Once you&apos;ve found the
              conversion ratio, multiply the value you want to convert by the
              conversion ratio.
            </p>
          </Prose>
        </Container>
      </Wrapper>
      <Wrapper className="border-t border-rule">
        <Container>
          <Prose>
            <h2 id="conversion-table">Volume Conversion Table</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <TableConversion slug="us-liquid-gallon" />
              <TableConversion slug="us-liquid-quart" />
              <TableConversion slug="us-liquid-pint" />
              <TableConversion slug="us-legal-cup" />
              <TableConversion slug="us-fluid-ounce" />
              <TableConversion slug="us-tablespoon" />
              <TableConversion slug="us-teaspoon" />
              <TableConversion slug="cubic-meter" />
              <TableConversion slug="liter" />
              <TableConversion slug="milliliter" />
              <TableConversion slug="imperial-gallon" />
              <TableConversion slug="imperial-quart" />
              <TableConversion slug="imperial-pint" />
              <TableConversion slug="imperial-cup" />
              <TableConversion slug="imperial-fluid-ounce" />
              <TableConversion slug="imperial-tablespoon" />
              <TableConversion slug="imperial-teaspoon" />
              <TableConversion slug="cubic-foot" />
              <TableConversion slug="cubic-inch" />
            </div>
          </Prose>
        </Container>
      </Wrapper>
    </>
  )
}
