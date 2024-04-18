import styled from 'styled-components';
import { InputInfo } from '../types/input';
import Validation from '../domain/InputValidation';

const InputContainer = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.color};
  outline-color: ${(props) => props.color};
  border-radius: 3px;
`;

interface Props {
  info: InputInfo;
  index: number;
  handleInput: (index: number, value: string) => void;
  isError: boolean | string;
  handleErrorMessage: (index: number, errorMessage: string) => void;
}

export default function Input({
  info,
  index,
  handleInput,
  isError,
  handleErrorMessage,
}: Props) {
  return (
    <InputContainer
      color={isError ? 'red' : 'grey'}
      type="text"
      maxLength={info.maxLength}
      placeholder={info.placeHolder}
      onChange={(e) => {
        try {
          Validation[info.validateType]?.(e.target.value);
          handleErrorMessage(index, '');
          handleInput(index, e.target.value);
        } catch (error) {
          if (error instanceof Error) {
            handleErrorMessage(index, error.message);
          }
        }
      }}
    />
  );
}
