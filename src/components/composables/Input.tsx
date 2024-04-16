import styled from 'styled-components';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'email' | 'password';
  placeholder: string;
  id: string;
};

const StyledInput = styled.input`
  border: 1px solid rgba(172, 172, 172, 1);
  padding: 8px;
  font-size: 0.6875rem;
  border-radius: 2px;
  height: 32px;
  flex: 1;
`;

export default function Input({ value, onChange, type, placeholder, id }: InputProps) {
  return (
    <StyledInput value={value} onChange={onChange} type={type} placeholder={placeholder} id={id} />
  );
}
