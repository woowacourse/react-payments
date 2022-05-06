import styled from 'styled-components';

const CircleStyled = styled.div(({ size, color }) => `
  width: ${size};
  height: ${size};
  border-radius: 100%;
  background-color: var(${color});
`);

export default CircleStyled;
