import React from "react";
import styled from "styled-components";

type TitleSize = "large" | "medium";

interface TitleProps {
  title: string;
  size?: TitleSize;
}

const Title = ({ title, size = "medium" }: TitleProps) => {
  return <TitleContainer size={size}>{title}</TitleContainer>;
};

const TitleContainer = styled.h3<{ size: TitleSize }>`
  font-weight: 700;
  font-size: ${({ size }) => (size === "large" ? "26px" : "18px")};

  color: #575757;

  opacity: 0.9;
`;

export default Title;
