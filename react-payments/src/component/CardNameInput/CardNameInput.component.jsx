import styled from "styled-components";

const CardNameInput = styled.input`
  width: 244px;
  height: 28px;
  font-size: 18px;
  border: transparent;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.cardNameInputBorder};
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export default CardNameInput;
