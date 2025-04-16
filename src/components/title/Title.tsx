import styled from "styled-components";
import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
	return <TitleText>{children}</TitleText>;
};

export default Title;

const TitleText = styled.h2`
	font-size: 18px;
	font-weight: 700;
`;
