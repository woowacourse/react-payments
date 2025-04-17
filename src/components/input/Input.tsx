import styled from "styled-components";
import { COLORS } from "../../styles/colors";

type Props = {
	placeholder?: string;
	isError?: boolean;
	value: string;
	maxLength?: number;
	inputHandler: (value: string) => void;
};

const Input = ({ placeholder, isError = false, value, maxLength, inputHandler }: Props) => {
	return (
		<TextInput
			maxLength={maxLength && maxLength}
			value={value}
			placeholder={placeholder}
			onChange={(e) => {
				inputHandler(e.target.value);
			}}
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
