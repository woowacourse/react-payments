import styled from "styled-components";

const CardNameInput = styled.input`
  width: 244px;
  height: 28px;
  font-size: 18px;
  border: transparent;
  border-bottom: 1.5px solid;
  text-align: center;
  border-bottom-color: ${({ theme, ready }) =>
    ready ? theme.colors.successMessage : theme.colors.errorMessage};

  &:focus {
    outline: none;
  }
`;

export default CardNameInput;
