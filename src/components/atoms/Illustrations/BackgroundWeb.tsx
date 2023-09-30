import * as React from 'react';
import {Dimensions} from 'react-native';
import Svg, {
  SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const BackgroundWeb = (props: SvgProps) => (
  <Svg width={width} height={height} fill='none' {...props}>
    <Path fill='#02070F' d={`M0 0h${width}v${height}H0z`} />
    <Path fill='url(#a)' fillOpacity={0.2} d={`M0 0h${width}v${height}H0z`} />
    <Path fill='url(#b)' fillOpacity={0.2} d={`M0 0h${width}v${height}H0z`} />
    <Defs>
      <RadialGradient
        id='a'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(-144.756 913.285 379.798) scale(1227.19 319.699)'
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#419DC4' />
        <Stop offset={1} stopColor='#41C4C4' stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id='b'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(-30.46 1830.914 941.612) scale(817.467 181.389)'
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#419DC4' />
        <Stop offset={1} stopColor='#41C4C4' stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default BackgroundWeb;
