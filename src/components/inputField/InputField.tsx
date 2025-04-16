import { ReactNode } from "react";
import Description from "../description/Description";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

type Props = {
	label: string;
	inputs: ReactNode[];
	errorMessage?: ReactNode;
};

const InputField = ({ label, inputs, errorMessage }: Props) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Wrapper>{...inputs}</Wrapper>
			<Description color={COLORS.ERROR}>{errorMessage && errorMessage}</Description>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 8px;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 8px;
`;

const Label = styled.div`
	color: #0a0d13;
	font-size: 12px;
	font-weight: 500;
`;

export default InputField;
