import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HintIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill='none' {...props}>
    <Path
      fill='#DF3E51'
      fillRule='evenodd'
      d='m13.4 4.313-2.2-2.2c-.5-.5-1.18-.78-1.887-.78H6.2c-.708 0-1.386.28-1.887.78l-2.2 2.2c-.5.5-.78 1.18-.78 1.887v3.113c.001.705.282 1.381.78 1.88l2.2 2.207c.5.5 1.18.78 1.887.78h3.113c.708 0 1.386-.28 1.887-.78l2.2-2.207a2.666 2.666 0 0 0 .78-1.88V6.2c0-.707-.28-1.386-.78-1.887Zm-6.147 1.2a.5.5 0 0 1 1 0V7.58a.5.5 0 1 1-1 0V5.513Zm.507 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'
      clipRule='evenodd'
    />
  </Svg>
);
export default HintIcon;
