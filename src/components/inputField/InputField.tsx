import { ReactNode } from "react";
import Description from "../description/Description";
import { COLORS } from "../../styles/colors";
import styled from "styled-components";

type Props = {
	label: string;
	children: ReactNode;
	errorMessage?: ReactNode;
};

const InputField = ({ label, children, errorMessage }: Props) => {
	return (
		<Container>
			<Label>{label}</Label>
			<InputWrapper>{children}</InputWrapper>
			<Description color={COLORS.ERROR}>{errorMessage && errorMessage}</Description>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 8px;
`;

const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 8px;
`;

const Label = styled.div`
	color: #0a0d13;
	font-size: 12px;
	font-weight: 500;
`;

export default InputField;
