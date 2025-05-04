import { ChangeEvent, ComponentProps, FocusEvent } from "react";
import { COLORS } from "../../styles/colors";
import styled from "styled-components";

interface InputProps extends ComponentProps<"input"> {
	isError?: boolean;
}

const Input = ({ isError = false, onChange, onBlur, ref, ...rest }: InputProps) => {
	return (
		<TextInput ref={ref} onChange={onChange && ((e: ChangeEvent<HTMLInputElement>) => onChange(e))} onBlur={onBlur && ((e: FocusEvent<HTMLInputElement>) => onBlur(e))} $isError={isError} {...rest} />
	);
};

const TextInput = styled.input<{ $isError: boolean }>(
	(props) => `
	width:100%;
	padding: 8px;
	border-radius: 2px;
  border:none;
	outline: 1px solid ${props.$isError ? COLORS.ERROR : COLORS.LIGHT_GRAY};
  
	&:focus {
		outline: 1px solid ${props.$isError ? COLORS.ERROR : "#000"};
	}
`
);

export default Input;
