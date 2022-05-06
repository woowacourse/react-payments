
import styled from 'styled-components';

const DimmerStyled = styled.div(({ show }) => `
  display: ${(show ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: var(--dimmer-background-color);
`);

export default DimmerStyled;
