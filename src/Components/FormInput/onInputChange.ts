import { SetStateAction } from "react";
import { ValidatorType } from "./validator";

interface ChangeProps<T, U> {
  name: keyof T;
  setData: React.Dispatch<SetStateAction<T>>;
  setError: React.Dispatch<SetStateAction<U>>;
  validator: ValidatorType;
}

const onInputChange = <T, U>(
  e: React.ChangeEvent<HTMLInputElement>,
  { name, setData, setError, validator }: ChangeProps<T, U>
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
};

export default onInputChange;
