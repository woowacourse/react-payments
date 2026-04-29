import styled from "@emotion/styled";
import { type ReactNode } from "react";

interface CardSectionProps {
  title: string;
  subTitle?: string;
  children: ReactNode;
}

export function CardSection({ title, subTitle, children }: CardSectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
      {children}
    </div>
  );
}
