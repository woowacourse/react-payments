import styled from "styled-components";

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.input};
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: ${({ theme }) => theme.colors.inputBorder};
  border: none;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.defaultText};
  font-size: 18px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    font-size: 16px;
  }
`;

export default Input;
