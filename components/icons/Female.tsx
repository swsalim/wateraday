import { IconProps } from '@/types'

export default function Male(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 48 48"
      {...props}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="24" cy="10" r="6" fillRule="evenodd" />
        <path fillRule="evenodd" d="M27.2308 16H20.7692L10 36H38L27.2308 16Z" />
        <path d="M27 36V44" />
        <path d="M21 36V44" />
      </g>
    </svg>
  )
}
