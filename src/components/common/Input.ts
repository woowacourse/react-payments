import styled from "styled-components";

const Input = styled.input<{ width: string; textAlign: string }>`
  width: ${(props) => props.width};

  background-color: transparent;

  border: none;
  outline: none;

  text-align: ${(props) => props.textAlign};
`;

export default Input;
