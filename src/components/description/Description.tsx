import styled from "styled-components";

type Props = {
	text: string;
	color?: string;
};
const Description = ({ text, color = "#8B95A1" }: Props) => {
	return <DescriptionText color={color}>{text}</DescriptionText>;
};

const DescriptionText = styled.div`
	color: ${(props) => props.color};
	font-size: 9.5px;
`;

export default Description;
