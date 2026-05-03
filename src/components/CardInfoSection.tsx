import styled from "@emotion/styled";

interface Props {
  title: string;
  caption?: string;
  inputLabel: string;
  children: React.ReactNode;
}

export default function CardInfoSection({
  title,
  caption,
  inputLabel,
  children,
}: Props) {
  return (
    <CardSectionContainer>
      <Title>{title}</Title>
      {caption && <Caption>{caption}</Caption>}
      <InputLabel>{inputLabel}</InputLabel>
      {children}
    </CardSectionContainer>
  );
}

const CardSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0 0 4px 0;
`;

const Caption = styled.caption`
  font-weight: 400;
  font-size: 9.5px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #8b95a1;
`;

const InputLabel = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0%;
  color: #0a0d13;
  margin-top: 16px;
  margin-bottom: 8px;
`;
