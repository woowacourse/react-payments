import {InputHTMLAttributes} from 'react';
import {COLORS} from '../../styles/colors';
import styled from 'styled-components';

type Props = {
  isError?: boolean;
  handleInput: (value: string) => void;
  handleFocusout?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  placeholder,
  isError = false,
  value,
  maxLength,
  handleInput,
  handleFocusout,
}: Props) => {
  return (
    <TextInput
      maxLength={maxLength && maxLength}
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleInput(e.target.value)}
      onBlur={handleFocusout && ((e) => handleFocusout(e.target.value))}
      $isError={isError}
    />
  );
};

const TextInput = styled.input<{$isError: boolean}>(
  (props) => `
	width:100%;
	padding: 8px;
	border-radius: 2px;
  border:none;
	outline: 1px solid ${props.$isError ? COLORS.ERROR : COLORS.LIGHT_GRAY};
  
	&:focus {
		outline: 1px solid ${props.$isError ? COLORS.ERROR : '#000'};
	}
`
);

export default Input;
