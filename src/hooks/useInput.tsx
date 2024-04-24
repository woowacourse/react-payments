import { ValidationStatus } from "@/utils/validation";
import { useState } from "react";
import React from "react";

interface Props {
  initialValue: string;
  validates: ((value: string) => {
    isValid: boolean;
    type: ValidationStatus;
  })[];
  maxNumberLength?: number;
}

const useInput = ({ initialValue, validates }: Props) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ValidationStatus | null>(null);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    const newValue = value;
    let newError: ValidationStatus | null = error;
    let allValid = true;

    validates.forEach((validate) => {
      const errorResult = validate(newValue);
      if (errorResult && !errorResult.isValid) {
        newError = errorResult.type;
        allValid = false;
      }
      if (allValid) {
        newError = null;
      }
      setError(newError);
    });

    setValue(event.target.value);
  };

  // useEffect(() => {
  //   console.log("aa");
  // }, [value]);

  return { value, onChange, error };
};
export default useInput;
