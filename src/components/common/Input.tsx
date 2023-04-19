import styled from "styled-components";

export interface InputProps {
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  const { placeholder, handleChange } = props;

  return <InputUnit placeholder={placeholder} onChange={handleChange} />;
}

const InputUnit = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  background: #ecebf1;
  border-radius: 0.7rem;
`;
