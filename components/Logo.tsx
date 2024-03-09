import { cn } from '@/lib/utils'
import ImageKit from '@/components/ImageKit'

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <span className="sr-only">wateraday.com</span>
      <div className={cn('relative size-7 overflow-hidden', className)}>
        <ImageKit
          src="logo.png"
          width={24}
          height={24}
          alt="wateraday.com"
          className="object-contain"
        />
      </div>
    </>
  )
}