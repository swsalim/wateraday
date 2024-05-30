import { generateConversionRange, getMetricFromSlug } from '@/lib/metrics'

export function TableConversionRange({
  originalSlug,
  targetSlug,
}: {
  originalSlug: string
  targetSlug: string
}) {
  const tableData = generateConversionRange(originalSlug, targetSlug)
  const originalMetric = getMetricFromSlug(originalSlug)
  const targetMetric = getMetricFromSlug(targetSlug)

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
                  {originalMetric?.name}
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  {targetMetric?.name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-200 bg-white">
              {tableData.map((data) => (
                <tr key={data.from}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                    {data.from}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {data.to}
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
