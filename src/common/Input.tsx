import React, { InputHTMLAttributes } from "react";

const sizeTag = {
  tiny: "w-15",
  small: "w-25",
  medium: "w-25",
  large: "w-75",
  full: "w-100",
};

const alignTag = {
  right: "text-right",
  left: "text-left",
  center: "text-center",
};

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  shape?: string;
  size?: "tiny" | "small" | "medium" | "large" | "full";
  align?: "right" | "left" | "center";
  classes?: string;
}

export default function Input({
  size,
  onChange,
  classes,
  align,
  shape = "input-basic",
  ...props
}: InputProps) {
  return (
    <input
      className={`${shape} ${classes} ${sizeTag[size]} ${alignTag[align]}`}
      onChange={e => {
        if (e.target.checkValidity()) {
          onChange(e);
        }
      }}
      {...props}
    />
  );
}
