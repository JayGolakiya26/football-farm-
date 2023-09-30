import { styled } from "@utils/styled";
import { LinearGradient } from "expo-linear-gradient";

export const Gradient = styled(LinearGradient)<{
  height?: number;
  width?: number;
  radius?: number;
}>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ radius }) => radius}px;
  justify-content: center;
`;
