import {InputHTMLAttributes} from 'react';
import {COLORS} from '../../styles/colors';
import styled from 'styled-components';

type Props = {
  isError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  placeholder,
  isError = false,
  value,
  maxLength,
  onChange,
  onBlur,
}: Props) => {
  return (
    <TextInput
      maxLength={maxLength && maxLength}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
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
