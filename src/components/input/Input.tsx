import {ComponentProps} from 'react';
import {COLORS} from '../../styles/colors';
import styled from 'styled-components';

type Props = {
  isError?: boolean;
} & ComponentProps<'input'>;

const Input = ({
  name,
  type,
  placeholder,
  isError = false,
  value,
  maxLength,
  autoFocus,
  onChange,
  onBlur,
}: Props) => {
  return (
    <TextInput
      name={name}
      type={type}
      maxLength={maxLength}
      value={value}
      placeholder={placeholder}
      autoFocus={autoFocus}
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
