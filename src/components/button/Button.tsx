import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	type: "button" | "submit";
}

const Button = ({ type, children, onClick, ...rest }: ButtonProps) => {
	return (
		<ButtonStyled type={type} onClick={onClick} {...rest}>
			{children}
		</ButtonStyled>
	);
};

export default Button;

const ButtonStyled = styled.button`
	width: 100%;
	padding: 20px 0;
	border: none;
	color: #fff;
	background: #333;
	cursor: pointer;
`;
