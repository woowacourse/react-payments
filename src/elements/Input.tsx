import React, { InputHTMLAttributes } from "react";

const sizeTag = {
  tiny: "w-15",
  small: "w-25",
  medium: "w-25",
  large: "w-75",
  full: "w-100",
};

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "maxLength"> {
  size?: "tiny" | "small" | "medium" | "large" | "full";
  maxLength?: number;
}

export default function Input({ size, ...props }: InputProps) {
  return <input className={`input-basic ${sizeTag[size]}`} {...props} />;
}
