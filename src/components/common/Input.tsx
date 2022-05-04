import React, { InputHTMLAttributes, useEffect, useRef } from "react";

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

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "maxLength"> {
  size?: "tiny" | "small" | "medium" | "large" | "full";
  align?: "right" | "left" | "center";
  maxLength?: number;
  inputs?: HTMLInputElement[];
}

export default function Input({
  size,
  maxLength,
  onChange,
  className,
  align,
  inputs,
  ...props
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLength = e.target.value.length;

    if (inputLength > maxLength) return;
    onChange(e);

    if (inputs) moveFocus(e.target, inputLength);
  };

  const moveFocus = (target: HTMLInputElement, inputLength: number) => {
    const inputIndex = inputs.findIndex(element => element === target);

    if (inputLength === maxLength) focusOnEmptyInput();
    if (inputLength === 0) focusOnPrevInput(inputIndex);
  };

  const focusOnEmptyInput = () => {
    inputs.find(input => input.value.length === 0)?.focus();
  };

  const focusOnPrevInput = (index: number) => {
    const prevInputs = inputs.slice(0, index);

    prevInputs
      .reverse()
      .find(input => input.value.length !== 0)
      ?.focus();
  };

  return (
    <input
      className={`input-basic ${className} ${sizeTag[size]} ${alignTag[align]}`}
      onChange={handleChange}
      {...props}
    />
  );
}
