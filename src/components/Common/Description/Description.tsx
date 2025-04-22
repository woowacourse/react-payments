import { DescriptionCSS } from "./Description.styled";

export interface DescriptionProps {
  description: string | null;
}

export default function Description({ description }: DescriptionProps) {
  return description !== null && <DescriptionCSS>{description}</DescriptionCSS>;
}
