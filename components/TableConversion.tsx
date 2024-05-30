import Link from 'next/link'
import { CalculatorIcon } from 'lucide-react'

import { generateConversionData } from '@/lib/metrics'

export function TableConversion({ slug }: { slug: string }) {
  const tableData = generateConversionData(slug)

  return (
    <div className="mt-8 flow-root">
      <div className="-my-2">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="not-prose min-w-full divide-y divide-blue-200 ">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  {tableData.heading}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-200 bg-white">
              {tableData.data.map((data) => (
                <tr key={data.value}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                    <Link
                      href={`/volume/${tableData.slug}/${data.slug}`}
                      className="group flex flex-row justify-between"
                      prefetch={false}
                    >
                      {data.value}

                      <CalculatorIcon className="size-5 transition group-hover:rotate-12 group-hover:scale-110" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
