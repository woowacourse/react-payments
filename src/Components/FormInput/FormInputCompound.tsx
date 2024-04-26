/** @jsxImportSource @emotion/react */
import React, { forwardRef, useEffect } from "react";
import { inputStyle } from "./style";

interface InputProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  name: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, name?: keyof T) => void;
  isError?: boolean;
  nextRef?: React.MutableRefObject<HTMLInputElement | null>;
  maxLength: number;
}

const ENTER_KEY_CODE = 13;
const TAB_KEY_CODE = 9;

const FormInputCompound = forwardRef(function FormInputCompound<T>(
  { sizePreset = "medium", name, isError, onInputChange, nextRef, ...props }: InputProps<T>,
  ref?: any
  // React.ForwardedRef<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>
) {
  useEffect(() => {
    const event = (e: KeyboardEvent) => {
      if (e.keyCode === ENTER_KEY_CODE || e.keyCode === TAB_KEY_CODE) {
        e.preventDefault();
        nextRef?.current?.focus();
      }
    };
    ref?.current?.addEventListener("keydown", event);

    return () => {
      ref?.current?.removeEventListener("keydown", event);
    };
  }, []);

  return (
    <input
      ref={ref}
      {...props}
      css={inputStyle(sizePreset, isError)}
      onChange={(e) => onInputChange(e, name as keyof T)}
    />
  );
});

export default FormInputCompound;
