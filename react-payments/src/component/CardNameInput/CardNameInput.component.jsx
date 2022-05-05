import styled from "styled-components";

const CardNameInput = styled.input`
  width: 244px;
  height: 28px;
  border: transparent;
  text-align: center;
  font-size: 18px;
  border-bottom: 1.5px solid
    ${({ theme, ready }) =>
      ready ? theme.colors.successInput : theme.colors.errorMessage};
  &:focus {
    outline: none;
  }
`;

export default CardNameInput;
