'use client'

import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

/**
 * Immersive editorial moment: ~60% body water.
 * Abstract silhouette fills on scroll. Not anatomical.
 */
export function BodyWaterStory() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const fill = useTransform(scrollYProgress, [0.05, 0.55], [8, 60])
  const fillPct = useTransform(fill, (v) => `${v}%`)
  const statOpacity = useTransform(scrollYProgress, [0.35, 0.55], [1, 0.35])
  const copyOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1])
  const copyY = useTransform(scrollYProgress, [0.4, 0.65], [24, 0])

  return (
    <section
      ref={ref}
      className="relative bg-band text-band-ink"
      aria-labelledby="body-water-heading"
    >
      <div className="relative h-[220vh]">
        <div className="sticky top-0 flex min-h-[100dvh] items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-20">
            <div className="relative md:col-span-5">
              <motion.p
                style={{ opacity: reduce ? 1 : statOpacity }}
                id="body-water-heading"
                className="font-heading text-[clamp(5rem,18vw,12rem)] font-bold leading-[0.85] tracking-[-0.05em] text-foam"
              >
                ~60%
              </motion.p>
              <p className="mt-4 max-w-[28ch] font-measure text-base uppercase tracking-[0.14em] text-band-muted">
                of an adult body is water
              </p>
            </div>

            {/* Abstract silhouette vessel */}
            <div className="relative mx-auto flex h-[420px] w-[200px] items-end justify-center md:col-span-3 md:h-[520px] md:w-[240px]">
              <div
                className="relative h-full w-[72%] overflow-hidden rounded-[999px_999px_48%_48%] border border-band-muted/40 bg-deep-ink/50"
                role="img"
                aria-label="Abstract body silhouette filling with water to about sixty percent"
              >
                <motion.div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean via-water to-aqua/80"
                  style={{ height: reduce ? '60%' : fillPct }}
                />
                <div
                  className="pointer-events-none absolute inset-y-6 left-[18%] w-[12%] rounded-full bg-foam/20"
                  aria-hidden
                />
              </div>
            </div>

            <motion.div
              style={
                reduce
                  ? undefined
                  : { opacity: copyOpacity, y: copyY }
              }
              className="max-w-md md:col-span-4"
            >
              <h3 className="font-heading text-2xl font-bold tracking-tight text-foam md:text-3xl">
                Your body is mostly water
              </h3>
              <p className="mt-4 text-base leading-relaxed text-band-muted">
                Brain and heart are closer to 73% water. Muscle holds more than
                fat. That is why hydration affects focus, temperature, and how
                you feel after a long day.
              </p>
              <p className="mt-4 text-base leading-relaxed text-band-muted">
                The percentage is an average for adults. Exact values vary with
                age, sex, and body composition.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
