import { AppTheme } from '@constants/theme';
import { ThemedStyledInterface } from 'styled-components';
import baseStyled from 'styled-components/native';

export const styled = baseStyled as unknown as ThemedStyledInterface<AppTheme>;
