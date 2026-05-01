import { CardInfoHeaderWrapper } from "./CardInfoHeader.styles";

interface CardInfoHeaderProps {
  guide: string;
  subGuide: string;
}

export default function CardInfoHeader({
  guide,
  subGuide,
}: CardInfoHeaderProps) {
  return (
    <CardInfoHeaderWrapper>
      <h1>{guide}</h1>
      <p>{subGuide}</p>
    </CardInfoHeaderWrapper>
  );
}
