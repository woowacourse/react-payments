import { DescriptionCSS } from "./Description.styled";

export interface DescriptionProps {
  description: string | null;
}

function Description({ description }: DescriptionProps) {
  return description !== null && <DescriptionCSS>{description}</DescriptionCSS>;
}

export default Description;
