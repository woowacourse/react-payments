import * as Styled from './Input.styles';

export interface InputProps {
  value?: string;
  maxLength?: number;
  placeholder?: string;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  maxLength,
  placeholder,
  isError,
  onChange,
}: InputProps) => {
  return (
    <>
      <Styled.Input
        type='text'
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        isError={isError}
        onChange={onChange}
      ></Styled.Input>
    </>
  );
};

export default Input;
