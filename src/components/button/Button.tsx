import { ReactNode } from "react";
import styled from "styled-components";

type Prop = {
	type: "button" | "submit";
	children?: string | ReactNode;
	onClick?: () => void;
};

const Button = ({ type, children, onClick }: Prop) => {
	return (
		<ButtonStyled type={type} onClick={onClick}>
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
