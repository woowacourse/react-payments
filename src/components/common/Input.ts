import styled from "styled-components";

const Input = styled.input<{ width: string }>`
  width: ${(props) => props.width};

  background-color: transparent;

  border: none;
  outline: none;

  text-align: center;
  line-height: -1;
`;

export default Input;
