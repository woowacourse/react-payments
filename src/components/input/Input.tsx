import { ChangeEvent, ComponentProps, FocusEvent } from "react";
import { COLORS } from "../../styles/colors";
import styled from "styled-components";

interface InputProps extends ComponentProps<"input"> {
	isError?: boolean;
}

const Input = ({ placeholder, isError = false, value, maxLength, onChange, onBlur, type = "text", ref }: InputProps) => {
	return (
		<TextInput
			ref={ref}
			type={type}
			maxLength={maxLength}
			value={value}
			placeholder={placeholder}
			onChange={onChange && ((e: ChangeEvent<HTMLInputElement>) => onChange(e))}
			onBlur={onBlur && ((e: FocusEvent<HTMLInputElement>) => onBlur(e))}
			$isError={isError}
		/>
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
