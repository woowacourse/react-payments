import type { ReactNode } from "react";
import styled from "styled-components";

type NextActionGuideProps = {
  visualElement: ReactNode;
  title: string;
  description: string;
  actionButton: ReactNode;
};

const NextActionGuide = ({
  visualElement,
  title,
  description,
  actionButton,
}: NextActionGuideProps) => {
  return (
    <NextActionGuideLayout>
      {visualElement}
      <TitleSpan>{title}</TitleSpan>
      <DescriptionSpan>{description}</DescriptionSpan>
      {actionButton}
    </NextActionGuideLayout>
  );
};

export default NextActionGuide;

const NextActionGuideLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const TitleSpan = styled.span`
  color: #353c49;
  font-size: 20px;
  font-weight: 700;
`;

const DescriptionSpan = styled.span`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
`;
