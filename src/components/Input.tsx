import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: "w-15" | "w-25" | "w-50" | "w-75" | "w-100";
}

export default function Input({ width, ...props }: InputProps) {
  return <input className={`input-basic ${width}`} {...props} />;
}
