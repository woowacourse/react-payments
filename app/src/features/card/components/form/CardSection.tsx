import styled from "@emotion/styled";
import { type ReactNode } from "react";

interface CardSectionProps {
  title: string;
  subTitle?: string;
  children: ReactNode;
}

export function CardSection({ title, subTitle, children }: CardSectionProps) {
  return (
    <CardSectionContainer>
      <h2>{title}</h2>
      <p className="sub-title">{subTitle}</p>
      {children}
    </CardSectionContainer>
  );
}

const CardSectionContainer = styled.div`
  h2 {
    margin-bottom: 0.25rem;
  }

  .sub-title {
    font-size: 9.5px;
    color: #6c727a;
    margin-bottom: 1rem;
    min-height: 1px;
  }
`;
