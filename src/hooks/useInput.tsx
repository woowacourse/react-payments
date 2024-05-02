import { useEffect, useState } from "react";
import { InputChangeCallbackType } from "./useInputs";

interface Props<T> {
  initialValue: T;
  validates?: ((value: string) => {
    isValid: boolean;
    type?: string;
  })[];
  inputChangeCallbacks?: InputChangeCallbackType[];
}

const useInput = <T,>({
  initialValue,
  validates,
  inputChangeCallbacks,
}: Props<T>) => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string[]>([]);
  const [isValidated, setIsValidated] = useState(true);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newValue = event.target.value;

    if (validates) {
      const newErrors = validates
        .map((validate) => validate(newValue))
        .filter((result) => !result.isValid)
        .map((result) => result.type);

      setError(newErrors as string[]);
    }

    if (inputChangeCallbacks) {
      inputChangeCallbacks.forEach((inputChangeCallbacks) => {
        newValue = inputChangeCallbacks(newValue);
      });
    }

    setValue(newValue as T);
  };

  useEffect(() => {
    if (!error.length && value !== "" && value) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [error, value]);

  return { value, onChange, error, isValidated, setValue, setError };
};

export default useInput;
