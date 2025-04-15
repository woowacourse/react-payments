import styled from "styled-components";
import { COLORS } from "../../styles/colors";

type Props = {
	placeholder?: string;
	isError?: boolean;
};

const Input = ({ placeholder, isError = false }: Props) => {
	return <TextInput isError={isError} placeholder={placeholder} />;
};

const TextInput = styled.input<{ isError: boolean }>(
	(props) => `
	padding: 8px;
	border-radius: 2px;
  border:none;
	outline: 1px solid ${props.isError ? COLORS.ERROR : COLORS.LIGHT_GRAY};
  
	&:focus {
		outline: 1px solid ${props.isError ? COLORS.ERROR : "#000"};
	}
`
);

export default Input;
