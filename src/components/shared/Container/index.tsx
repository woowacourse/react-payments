import styled from 'styled-components';

interface Props {
  width?: string;
  flex?: boolean;
  justifyContent?: 'space-between' | 'center';
  alignItems?: 'center';
  backgroundColor?: string;
}

const Container = styled.div<Props>`
  border-radius: 0.5rem;
  box-sizing: border-box;
  width: ${({ width }) => width || '100%'};
  ${({ flex }) => flex && `display: flex;`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`};
`;

export default Container;
