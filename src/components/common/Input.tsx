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
  classes?: string;
}

export default function Input({ size, maxLength, onChange, classes, align, ...props }: InputProps) {
  const arrayInputsRef = useRef<HTMLInputElement[]>(null);

  useEffect(() => {
    arrayInputsRef.current = Array.from(
      document.querySelector("#card-info-form").querySelectorAll("input")
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputLength = e.target.value.length;

    if (inputLength > maxLength) return;

    const inputIndex = arrayInputsRef.current.findIndex(element => element === e.target);

    if (inputLength === maxLength) focusOnNextInput(inputIndex);
    if (inputLength === 0) focusOnPrevInput(inputIndex);
    onChange?.(e);
  };

  const focusOnNextInput = (index: number) => {
    arrayInputsRef.current[index + 1].focus();
  };

  const focusOnPrevInput = (index: number) => {
    const prevInputs = arrayInputsRef.current.slice(0, index);

    prevInputs
      .reverse()
      .find(input => input.value.length !== 0)
      .focus();
  };

  return (
    <input
      className={`input-basic ${classes} ${sizeTag[size]} ${alignTag[align]}`}
      onChange={handleChange}
      {...props}
    />
  );
}
