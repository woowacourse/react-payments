import styled from '@emotion/styled';
import type { Property } from 'csstype';

interface FlexProps {
  direction?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  gap?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) => (props.gap ? `gap: ${props.gap}px;` : '')}
  ${(props) => (props.flexGrow ? `flex-grow: ${props.flexGrow};` : '')}
  ${(props) => (props.flexShrink ? `flex-shrink: ${props.flexShrink};` : '')}
`;

export default Flex;
