import Link from 'next/link'
import type { Product } from '@/types'

import { Button } from '@/components/ui/Button'
import ImageKit from '@/components/ImageKit'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="group relative isolate flex flex-col rounded-lg border border-transparent bg-slate-100 px-5 py-4 transition duration-300 hover:border-slate-500/50 hover:bg-slate-100/45 hover:drop-shadow-xl">
      <div className="mx-auto shrink-0 transition duration-200 ease-in-out">
        {product.image && (
          <ImageKit
            directory="Products"
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        )}
        {!product.image && (
          <ImageKit
            directory="Products"
            src="default-product-image.png"
            alt={product.name}
            width={500}
            height={500}
            className="contrast-50"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col items-center gap-y-2 px-4">
        <div className="flex gap-2">
          {product.brand && (
            <>
              <Link
                href={product.url}
                className="relative z-50 text-sm font-medium tracking-wide text-slate-700 underline-offset-4 transition duration-300 hover:text-amber-700 hover:underline"
                target="_blank"
              >
                {product.brand}
              </Link>{' '}
              ·{' '}
            </>
          )}
          <span className="z-50 text-sm font-medium tracking-wide text-slate-700">
            {product.category[0]}
          </span>
        </div>
        <h3 className="text-center font-heading text-base tracking-wider text-slate-900">
          {product.name}
        </h3>
        <p className="flex-1 text-base font-semibold text-slate-700">
          {currencyFormatter.format(product.price)}
        </p>
        <Button
          variant="primary"
          size="medium"
          className="mb-4 mt-2 text-sm font-bold capitalize group-hover:bg-blue-800 group-hover:text-white"
        >
          Check it out
        </Button>
      </div>
      <Link href={product.url} className="absolute inset-0" target="_blank">
        <span className="sr-only">View Product</span>
      </Link>
    </div>
  )
}
