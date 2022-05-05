import styled from "styled-components";

const CardNameInput = styled.input`
  width: 244px;
  height: 28px;
  border: transparent;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.cardNameInputBorder};
  text-align: center;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

export default CardNameInput;
