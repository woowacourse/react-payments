import { DescriptionStyles } from "./Description.styled";

export interface DescriptionProps {
  description: string | null;
}

export default function Description({ description }: DescriptionProps) {
  return (
    description !== null && <DescriptionStyles>{description}</DescriptionStyles>
  );
}
