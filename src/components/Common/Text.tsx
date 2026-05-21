import { css, type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import type { Property } from 'csstype';
import {
  FONT_COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  type FontColorToken,
  type FontSizeToken,
  type FontWeightToken,
} from '../../styles/tokens';

interface CommonTextProps {
  size?: FontSizeToken;
  weight?: FontWeightToken;
  color?: FontColorToken;
  align?: Property.TextAlign;
  style?: never;
  customStyle?: SerializedStyles;
}

const textStyles = (props: CommonTextProps) => css`
  /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
  font-size: ${FONT_SIZE[props.size ?? 'm']};
  /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
  font-weight: ${FONT_WEIGHT[props.weight ?? 'medium']};
  /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
  color: ${FONT_COLOR[props.color ?? 'black']};
  ${props.align ? `text-align: ${props.align};` : ''}
  ${props.customStyle}
`;

const TextBase = styled.p<CommonTextProps>`
  margin: 0;
  ${textStyles}
`;

const H1 = styled.h1<CommonTextProps>`
  ${textStyles}
`;

const H2 = styled.h2<CommonTextProps>`
  ${textStyles}
`;

const H3 = styled.h3<CommonTextProps>`
  ${textStyles}
`;

const H4 = styled.h4<CommonTextProps>`
  ${textStyles}
`;

const H5 = styled.h5<CommonTextProps>`
  ${textStyles}
`;

const H6 = styled.h6<CommonTextProps>`
  ${textStyles}
`;

const Span = styled.span<CommonTextProps>`
  ${textStyles}
`;

const Label = styled.label<CommonTextProps>`
  ${textStyles}
`;

const Text = Object.assign(TextBase, { H1, H2, H3, H4, H5, H6, Span, Label });

export default Text;
