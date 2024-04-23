import styled from 'styled-components';

const InputContainer = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.color};
  outline-color: ${(props) => props.color};
  border-radius: 3px;
`;
interface Props {
  type? : string
  maxLength: number;
  placeholder: string
  isError? : boolean;
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
  type = 'string',
  maxLength,
  placeholder,
  isError = false,
  onChange,
}: Props) {
  return (
    <InputContainer
      color={isError ? 'red' : 'grey'}
      type= {type}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
