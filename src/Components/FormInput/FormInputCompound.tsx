/** @jsxImportSource @emotion/react */
import React, { SetStateAction, forwardRef, useEffect } from "react";
import { inputStyle } from "./style";
import onInputChange from "./onInputChange";
import { ValidatorType } from "./validator/changeValidator";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  name: string;
  setData: React.Dispatch<SetStateAction<any>>;
  setError: React.Dispatch<SetStateAction<any>>;
  changeValidator: ValidatorType;
  blurValidator: ValidatorType;
  isError?: boolean;
  nextRef?: React.MutableRefObject<HTMLInputElement | null>;
  maxLength: number;
}

const ENTER_KEY_CODE = "Enter";
const TAB_KEY_CODE = "Tab";

const FormInputCompound = forwardRef(function FormInputCompound(
  {
    sizePreset = "medium",
    name,
    isError,
    setData,
    setError,
    nextRef,
    blurValidator,
    changeValidator,
    ...props
  }: InputProps,
  ref?: any
  // React.ForwardedRef<HTMLInputElement> | React.MutableRefObject<HTMLInputElement>
) {
  useEffect(() => {
    const event = (e: KeyboardEvent) => {
      if (e.key === ENTER_KEY_CODE || e.key === TAB_KEY_CODE) {
        e.preventDefault();
        nextRef?.current?.focus();
      }
    };
    ref?.current?.addEventListener("keydown", event);

    return () => {
      ref?.current?.removeEventListener("keydown", event);
    };
  }, [nextRef, ref]);

  const changeEventParam = { name, setData, setError, validator: changeValidator, maxLength: props.maxLength, nextRef };
  const blurEventParam = { ...changeEventParam, validator: blurValidator };

  return (
    <input
      ref={ref}
      name={name}
      css={inputStyle(sizePreset, isError)}
      onChange={(e) => onInputChange(e, changeEventParam)}
      onBlur={(e) => onInputChange(e, blurEventParam)}
      {...props}
    />
  );
});

export default FormInputCompound;
