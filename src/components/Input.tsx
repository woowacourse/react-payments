import styled from 'styled-components';
import { InputInfo } from '../types/input';
import Validation from '../domain/InputValidation';

interface Props {
  info: InputInfo;
  handleInput: (value: string) => void;
  isError: boolean;
  handleErrorMessage: (errorMessage: string) => void;
}

export default function Input({
  info,
  handleInput,
  isError,
  handleErrorMessage,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    try {
      Validation[info.validateType]?.(inputValue);
      handleErrorMessage('');
      handleInput(inputValue);
    } catch (error) {
      if (error instanceof Error) {
        handleErrorMessage(error.message);
      }
    }
  };

  return (
    <StyledInput
      color={isError ? 'red' : 'grey'}
      type={info.type || 'text'}
      maxLength={info.maxLength}
      placeholder={info.placeHolder}
      onChange={handleChange}
    />
  );
}

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ color }) => color};
  outline-color: ${({ color }) => color};
  border-radius: 3px;
`;
