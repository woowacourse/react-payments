import { useState } from 'react';
import styled from 'styled-components';
import { isNumberValue } from '../../domain/validator';

type TextType = 'string' | 'number';
type TextAlign = 'left' | 'center';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  textType: TextType;
  value: string;
  setValue: (value: string) => void;
  length: number;
  textAlign?: TextAlign;
  textSecurity?: boolean;
  insert?: (element: HTMLInputElement | null) => void;
  focus?: (go: number) => void;
}

const Input = (props: Props) => {
  const { textType, setValue, length, required, insert, focus } = props;
  const [warning, setWarning] = useState(false);

  const riseWarning = () => {
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 400);
  };

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (textType === 'number' && !isNumberValue(value)) {
      riseWarning();
      return;
    }

    setValue(value);

    if (!focus) return;
    if (value.length === length) focus(1);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { target, key } = e;
    if (!focus) return;
    if (!(target instanceof HTMLInputElement)) return;

    if (target.selectionStart === 0 && key === 'Backspace') focus(-1);
    if (target.selectionStart === 0 && key === 'ArrowLeft') {
      focus(-1);
      e.preventDefault();
    }
    if (target.selectionStart === target.value.length && key === 'ArrowRight') {
      focus(1);
      e.preventDefault();
    }
  };

  return (
    <StyledInput
      {...props}
      onChange={onChange}
      onKeyDown={onKeyDown}
      minLength={required ? length : 0}
      maxLength={length}
      ref={insert}
      warning={warning}
    />
  );
};

export default Input;

interface StyledInputProps extends Props {
  warning: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  transition: border 0.1s;
  outline: none;

  width: ${({ length }) => length * 16}px;
  max-width: 100%;
  height: 100%;
  border: none;
  border-bottom: solid 3px ${({ warning }) => (warning ? 'red' : 'transparent')};
  background-color: transparent;

  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-size: 16px;
  color: #000000;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ textSecurity }) => textSecurity && '-webkit-text-security: disc'};
`;
