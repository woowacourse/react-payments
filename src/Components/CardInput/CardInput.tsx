import React from "react";

interface CardInputProps {
  title: string;
  description?: string;
  label: string;
  children: React.ReactNode;
}

const CardInput: React.FC<CardInputProps> = ({ title, label, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <label>{label}</label>
      {children}
    </div>
  );
};

export default CardInput;
