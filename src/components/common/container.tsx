import styled from 'styled-components';

interface Props {
  flex: boolean;
  spaceBetween: boolean;
}

const Container = styled.div<Props>`
  ${({ flex }) => flex && `display: flex;`}

  ${({ spaceBetween }) => spaceBetween && `justify-content: space-between;`}
`;

export default Container;
