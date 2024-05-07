/** @jsxImportSource @emotion/react */
import React from "react";
import { CardInputWrapper } from "./CardInput.styles";

interface CardInputProps {
  title: string;
  description?: string;
  label: string;
  children: React.ReactNode;
}

const CardInput: React.FC<CardInputProps> = ({
  title,
  description,
  label,
  children,
}) => {
  return (
    <CardInputWrapper>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <label>{label}</label>
      {children}
    </CardInputWrapper>
  );
};

export default CardInput;
