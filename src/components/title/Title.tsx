import { ReactNode } from "react";
import styled from "styled-components";

const Title = ({ children }: { children: ReactNode }) => {
	return <TitleText>{children}</TitleText>;
};

export default Title;

const TitleText = styled.h2`
	font-size: 19px;
	font-weight: 700;
`;
