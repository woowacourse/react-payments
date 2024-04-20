import styled from 'styled-components';
import { InputInfo } from '../types/input';
import Validation from '../domain/InputValidation';

interface Props {
  info: InputInfo;
  handleInput: (value: string) => void;
  isError: boolean | string;
  handleErrorMessage: (errorMessage: string) => void;
}

export default function Input({
  info,
  handleInput,
  isError,
  handleErrorMessage,
}: Props) {
  return (
    <StyledInput
      color={isError ? 'red' : 'grey'}
      type="text"
      maxLength={info.maxLength}
      placeholder={info.placeHolder}
      onChange={(e) => {
        try {
          Validation[info.validateType]?.(e.target.value);
          handleErrorMessage('');
          handleInput(e.target.value);
        } catch (error) {
          if (error instanceof Error) {
            handleErrorMessage(error.message);
          }
        }
      }}
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
