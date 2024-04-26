import { SetStateAction } from "react";
import { ValidatorType } from "./validator";

interface ChangeProps<T, U> {
  name: keyof T;
  setData: React.Dispatch<SetStateAction<T>>;
  setError: React.Dispatch<SetStateAction<U>>;
  setRenderOrder: React.Dispatch<SetStateAction<FormRenderOrder>>;
  validator: ValidatorType;
  maxLength?: number;
  nextRef?: React.MutableRefObject<HTMLInputElement | null>;
  isLastInput?: boolean;
  step?: number;
}

const onInputChange = <T, U>(
  e: React.ChangeEvent<HTMLInputElement>,
  { name, setData, setError, validator, maxLength, setRenderOrder, nextRef, isLastInput, step }: ChangeProps<T, U>
) => {
  const {
    isValid,
    value,
    message: errorMessage,
  } = validator(e.target.value, name === "month" || name === "year" ? name : undefined);

  if (isValid && name) {
    setData((prev: T) => {
      const temp = { ...prev };
      temp[name] = value as T[keyof T];
      return temp;
    });
    setError((prev: U) => {
      const errors = JSON.parse(JSON.stringify(prev));
      errors[name] = { isError: false, errorMessage: "" };
      return errors;
    });
  } else {
    setError((prev: U) => {
      const errors = JSON.parse(JSON.stringify(prev));
      errors[name] = { isError: true, errorMessage };
      return errors;
    });
  }

  if (maxLength && value?.length === maxLength) {
    nextRef?.current?.focus();
    if (isLastInput) {
      setRenderOrder((prev) => {
        if (prev.index === step && isLastInput) {
          return { ...prev, index: prev.index + 1 };
        }
        return prev;
      });
    }
  }
};

export default onInputChange;
