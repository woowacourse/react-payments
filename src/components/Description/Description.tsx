import styled from "styled-components";

export interface DescriptionProps {
  description: string;
}

const DescriptionCSS = styled.p`
  font-size: 12px;
  color: #8b95a1;
`;

function Description({ description }: DescriptionProps) {
  return <DescriptionCSS>{description}</DescriptionCSS>;
}

export default Description;
