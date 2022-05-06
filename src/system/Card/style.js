import styled from 'styled-components';

const CardWrapperStyled = styled.div(({ color }) => `
  cursor: pointer;
  width: 208px;
  height: 130px;
  padding: 10px;
  margin-bottom: 16px;
  background-color: var(${color});
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`);

export default CardWrapperStyled;
