import React, { memo, useMemo } from 'react';
import { Text as LabelComp } from 'react-native-paper';
import { TextProps } from './Text.props';
import { useAppTheme } from '@constants/theme';

const Text: React.FC<TextProps> = memo((props) => {
  const { color, style, children, variant, ...rest } = props;
  const { fonts } = useAppTheme();
  const textStyle = useMemo(() => {
    const _style = [style];
    if (color) {
      _style.push({ color });
    }
    if (variant) {
      _style.push({ fontFamily: `${variant ? variant : 'Inter_400Regular'}` });
    }
    return _style;
  }, [style, fonts, color]);

  return (
    <LabelComp style={textStyle} {...rest}>
      {children}
    </LabelComp>
  );
});

export default Text;
