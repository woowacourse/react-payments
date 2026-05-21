import type { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import type { Property } from 'csstype';
import { SPACING, type SpacingToken } from '../../tokens';

interface FlexProps {
  direction?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  gap?: SpacingToken;
  style?: never;
  customStyle?: SerializedStyles;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) => (props.gap ? `gap: ${SPACING[props.gap]};` : '')}
  ${(props) => (props.flexGrow ? `flex-grow: ${props.flexGrow};` : '')}
  ${(props) => (props.flexShrink ? `flex-shrink: ${props.flexShrink};` : '')}
  ${(props) => props.customStyle}
`;

export default Flex;
