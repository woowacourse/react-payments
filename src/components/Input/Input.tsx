import styled from "styled-components";

export interface InputProps {
  placeholder: string;
}

const InputCSS = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1.01px solid #acacac;
  padding: 0 8px;
`;

function Input({ placeholder }: InputProps) {
  return <InputCSS placeholder={placeholder} />;
}

export default Input;
