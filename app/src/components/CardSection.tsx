import styled from "@emotion/styled";
import { type ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  children: ReactNode;
}

export function CardSection({ title, subTitle, children }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
      {children}
    </div>
  );
}
