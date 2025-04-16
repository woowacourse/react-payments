import styled from "styled-components";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	color?: string;
};
const Description = ({ children, color = "#8B95A1" }: Props) => {
	return <DescriptionText color={color}>{children}</DescriptionText>;
};

const DescriptionText = styled.div`
	color: ${(props) => props.color};
	font-size: 9.5px;
`;

export default Description;
