import styled from "styled-components";

const Title = ({ text }: { text: string }) => {
	return <TitleText>{text}</TitleText>;
};

export default Title;

const TitleText = styled.h2`
	font-size: 18px;
	font-weight: 700;
`;
