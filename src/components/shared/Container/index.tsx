import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  inlineBlock?: boolean;
  flex?: boolean;
  justifyContent?: 'space-between' | 'center';
  alignItems?: 'center';
  backgroundColor?: string;
  margin?: string;
}

const Container = styled.div<Props>`
  border-radius: 0.5rem;
  box-sizing: border-box;
  width: ${({ width }) => width || '100%'};
  ${({ height }) => height && `height: ${height};`}
  ${({ inlineBlock }) => inlineBlock && `display: inline-block;`}
  ${({ flex }) => flex && `display: flex;`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`};
  ${({ margin }) => margin && `margin: ${margin}`}
`;

export default Container;
