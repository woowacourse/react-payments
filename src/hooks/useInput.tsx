import { useEffect, useState } from "react";

interface Props<T> {
  initialValue: T;
  validates: ((value: string) => {
    isValid: boolean;
    type: string;
  })[];
  onChangeFunc?: (value: string) => string;
}

const useInput = <T,>({ initialValue, validates, onChangeFunc }: Props<T>) => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string[]>([]);
  const [isError, setIsError] = useState(true);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;

    if (onChangeFunc) {
      event.target.value = onChangeFunc(newValue);
    }

    const newErrors = validates
      .map((validate) => validate(newValue))
      .filter((result) => !result.isValid)
      .map((result) => result.type);

    setError(newErrors);
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
