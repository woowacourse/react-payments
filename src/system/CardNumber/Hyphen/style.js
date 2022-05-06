import styled from 'styled-components';

const HyphenStyled = styled.p(({ color }) => `
  margin: 0;
  font-size: 18px;
  line-height: 47px;
  color: var(${color});
`);

export default HyphenStyled;
