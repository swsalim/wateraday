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
        <circle cx="24" cy="10" r="6" />
        <path d="M30 36H18L10 16H38L30 36Z" />
        <path d="M27 36V44" />
        <path d="M21 36V44" />
      </g>
    </svg>
  )
}
