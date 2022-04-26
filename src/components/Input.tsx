import React from "react";

interface InputProps {
  type: string;
  width: "w-15" | "w-25" | "w-50" | "w-75" | "w-100";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  placeholder: string;
}

export default function Input({ type, width, onChange, maxLength, placeholder }: InputProps) {
  return (
    <input
      className={`input-basic ${width}`}
      type={type}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  );
}
