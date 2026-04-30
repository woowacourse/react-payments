import styled from '@emotion/styled';
import type { Property } from 'csstype';

interface FlexProps {
  direction?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  flexGrow?: Property.FlexGrow;
  flexShrink?: Property.FlexShrink;
  gap?: number;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}
  ${(props) => (props.gap ? `gap: ${props.gap}px;` : '')}
  ${(props) => (props.gap ? `flex-grow: ${props.flexGrow};` : '')}
  ${(props) => (props.gap ? `flex-shrink: ${props.flexShrink};` : '')}
`;

export default Flex;
