import styled from "@emotion/styled";

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

const CardInfoHeaderWrapper = styled.div`
  h1 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0%;
    line-height: 100%;
    vertical-align: middle;
    color: rgba(0, 0, 0, 1);
  }
  p {
    font-size: 9.5px;
    font-weight: 400;
    letter-spacing: 0%;
    line-height: 100%;
    vertical-align: middle;
    color: rgba(139, 149, 161, 1);
  }
`;
