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
  const [isError, setIsError] = useState(true);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newValue = event.target.value;

    if (inputChangeCallbacks) {
      inputChangeCallbacks.forEach((inputChangeCallbacks) => {
        newValue = inputChangeCallbacks(newValue);
      });

      event.target.value = newValue;
    }

    if (validates) {
      const newErrors = validates
        .map((validate) => validate(newValue))
        .filter((result) => !result.isValid)
        .map((result) => result.type);

      setError(newErrors as string[]);
    }

    setValue(newValue as T);
  };

  useEffect(() => {
    if (!error.length && value !== "" && value) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [error, value]);

  return { value, onChange, error, isError, setValue, setError };
};

export default useInput;
