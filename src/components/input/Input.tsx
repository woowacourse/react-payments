import {ComponentProps, forwardRef, Ref} from 'react';
import {COLORS} from '../../styles/colors';
import styled from 'styled-components';

type Props = {
  isError?: boolean;
} & ComponentProps<'input'>;

const Input = forwardRef(
  ({isError = false, ...props}: Props, ref: Ref<HTMLInputElement>) => {
    return <TextInput ref={ref} {...props} $isError={isError} />;
  }
);

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
