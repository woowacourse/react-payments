import styled from 'styled-components';

interface Props {
  flex?: boolean;
  spaceBetween?: boolean;
  backgroundColor?: string;
}

const Container = styled.div<Props>`
  border-radius: 0.5rem;
  ${({ flex }) => flex && `display: flex;`}
  ${({ spaceBetween }) => spaceBetween && `justify-content: space-between;`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`};
`;

export default Container;
