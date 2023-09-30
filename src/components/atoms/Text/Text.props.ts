import { Text } from "react-native-paper";
import { MD3TypescaleKey } from "@constants/theme";

interface PartialTextProps {
  color?: string;
  variant?: MD3TypescaleKey;
}

export type TextProps = React.ComponentProps<typeof Text> & PartialTextProps;
