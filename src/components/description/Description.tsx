import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
	children: ReactNode;
	color?: string;
};
const Description = ({ children, color = "#8B95A1" }: Props) => {
	return <DescriptionText color={color}>{children}</DescriptionText>;
};

const DescriptionText = styled.div`
	margin-bottom: 16px;
	color: ${(props) => props.color};
	font-size: 9.5px;
`;

export default Description;
