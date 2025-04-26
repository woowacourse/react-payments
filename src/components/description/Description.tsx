import { ReactNode } from "react";
import styled from "styled-components";

type DescriptionProps = {
	children: ReactNode;
	color?: string;
};
const Description = ({ children, color = "#8B95A1" }: DescriptionProps) => {
	return <DescriptionText color={color}>{children}</DescriptionText>;
};

const DescriptionText = styled.div`
	margin-bottom: 16px;
	color: ${(props) => props.color};
	font-size: 9.5px;
`;

export default Description;
