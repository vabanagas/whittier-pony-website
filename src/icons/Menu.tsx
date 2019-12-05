import React from "react"

export default (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line
      x1="12"
      y1="19"
      x2="36"
      y2="19"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="12"
      y1="27"
      x2="28"
      y2="27"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)
