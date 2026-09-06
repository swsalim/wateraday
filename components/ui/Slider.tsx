'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-rule">
      <SliderPrimitive.Range className="absolute h-full bg-ocean" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block size-5 cursor-pointer rounded-full border-2 border-ocean bg-foam shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-[var(--dur-short)] ease-[var(--ease-out)] hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:scale-95 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
