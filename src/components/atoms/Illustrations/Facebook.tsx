import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const FacebookIcon = (props: SvgProps) => (
  <Svg width={21} height={20} fill='none' {...props}>
    <Path
      fill='#3B5998'
      d='M18.833 10c0-4.6-3.733-8.333-8.333-8.333A8.336 8.336 0 0 0 2.165 10c0 4.033 2.867 7.392 6.667 8.167V12.5H7.166V10h1.667V7.917A2.92 2.92 0 0 1 11.749 5h2.084v2.5h-1.667a.836.836 0 0 0-.833.833V10h2.5v2.5h-2.5v5.792a8.332 8.332 0 0 0 7.5-8.292Z'
    />
  </Svg>
);
export default FacebookIcon;
