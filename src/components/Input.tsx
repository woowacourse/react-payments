import styled from 'styled-components';
import { InputInfo } from '../types/input';
import Validation from '../domain/InputValidation';
import { forwardRef } from 'react';

interface Props {
  info: InputInfo;
  handleInput: (value: string) => void;
  isError: boolean;
  handleErrorMessage: (errorMessage: string) => void;
  onNext: () => void;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { info, handleInput, isError, handleErrorMessage, onNext } = props;

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

    if (inputValue.length === info.maxLength) {
      onNext();
    }
  };

  return (
    <StyledInput
      color={isError ? 'red' : 'grey'}
      type={info.type || 'text'}
      maxLength={info.maxLength}
      placeholder={info.placeHolder}
      onChange={handleChange}
      ref={ref}
    />
  );
});

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ color }) => color};
  outline-color: ${({ color }) => color};
  border-radius: 3px;
`;
