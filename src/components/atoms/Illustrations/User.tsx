import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const User = ({color, ...props}: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill={color}>
      <Path d="M16.64 22H7.36a3.39 3.39 0 0 1-3.18-4.15l.24-1.14A3.29 3.29 0 0 1 7.59 14h8.82a3.29 3.29 0 0 1 3.17 2.71l.24 1.14A3.39 3.39 0 0 1 16.64 22ZM12.5 12h-1a4 4 0 0 1-4-4V5.36A3.35 3.35 0 0 1 10.86 2h2.28a3.35 3.35 0 0 1 3.36 3.36V8a4 4 0 0 1-4 4Z" />
    </G>
  </Svg>
)
export default User
