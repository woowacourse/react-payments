import styled from "styled-components";

interface InputProps {
  maxLength: number;
  placeholder: string;
  isError: boolean;
}

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: var(--color-black);
  }
`;

const Input = ({ maxLength, placeholder, isError = false }: InputProps) => {
  return <InputField placeholder={placeholder} maxLength={maxLength} />;
};

export default Input;
