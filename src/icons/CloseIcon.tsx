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
      x1="15.7071"
      y1="15.2929"
      x2="32.6777"
      y2="32.2635"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="15.2929"
      y1="32.2634"
      x2="32.2635"
      y2="15.2929"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)
