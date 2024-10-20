import { cn } from '@/lib/utils'

const ageGroups = [
  {
    name: '1-3 years',
    value: '1.3-2.1 liters (44-72 ounces)',
  },
  {
    name: '4-8 years',
    value: '1.7-2.4 liters (57-81 ounces)',
  },
  {
    name: '9-13 years',
    value: '2.4-3.3 liters (81-112 ounces)',
  },
  {
    name: '14-18 years (boys)',
    value: '3.3-3.7 liters (112-125 ounces)',
  },
  {
    name: '14-18 years (girls)',
    value: '2.3-2.7 liters (78-91 ounces)',
  },
  {
    name: 'Adults (men)',
    value: '3.7 liters (125 ounces)',
  },
  {
    name: 'Adults (women)',
    value: '2.7 liters (91 ounces)',
  },
]

export function TableWaterIntake() {
  return (
    <div className="inline-block min-w-full overflow-x-auto align-middle">
      <table className="min-w-full">
        <caption className="sr-only">Recommended Daily Water Intake</caption>
        <thead>
          <tr className="divide-x divide-gray-200">
            <th
              scope="col"
              className="bg-gray-50 py-3.5 pl-4 pr-3 text-start text-base font-semibold text-gray-900"
            >
              Age Group
            </th>
            <th
              scope="col"
              className="bg-gray-50 py-3.5 pl-6 pr-4 text-start text-base font-semibold text-gray-900"
            >
              Recommended Daily Water Intake
            </th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-200">
          {ageGroups.map((ageGroup, index) => (
            <tr key={ageGroup.name} className="divide-x divide-gray-200">
              <td
                className={cn(
                  'whitespace-nowrap py-4 pl-4 pr-3 text-base text-gray-700',
                  index === 0 && 'pt-8',
                  index === ageGroups.length - 1 && 'pb-8'
                )}
              >
                {ageGroup.name}
              </td>
              <td
                className={cn(
                  'whitespace-nowrap py-4 pl-6 pr-4 text-base text-gray-500',
                  index === 0 && 'pt-8',
                  index === ageGroups.length - 1 && 'pb-8'
                )}
              >
                <span className="block">{ageGroup.value}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
