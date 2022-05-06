import styled from 'styled-components';

const NameLengthStyled = styled.p(({ color }) => `
  margin: 0;
  letter-spacing: -0.05em;
  font-size: 12px;
  color: ${color};
`);

export default NameLengthStyled;
