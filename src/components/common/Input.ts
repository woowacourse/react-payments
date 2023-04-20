import styled from "styled-components";

const Input = styled.input<{ width: string; textAlign: string }>`
  width: ${({ width }) => width};

  background-color: transparent;

  border: none;
  outline: none;

  letter-spacing: 1px;

  text-align: ${({ textAlign }) => textAlign};
`;

export default Input;
