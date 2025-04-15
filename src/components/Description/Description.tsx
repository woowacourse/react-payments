import { DescriptionCSS } from "./Description.styled";

export interface DescriptionProps {
  description: string;
}

function Description({ description }: DescriptionProps) {
  return <DescriptionCSS>{description}</DescriptionCSS>;
}

export default Description;
