import { useState } from "react";
import { runValidation } from "../Utils";

interface ErrorInterface {
  state: boolean;
  message: string;
}

interface UseValidatedInputProps {
  setValue: (value: string) => void;
  changeValidators: (value: string) => (() => void)[];
  blurValidators: (value: string) => (() => void)[];
}

export default function useValidatedInput({
  setValue,
  changeValidators,
  blurValidators,
}: UseValidatedInputProps) {
  const [isError, setError] = useState<ErrorInterface>({
    state: false,
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errorReport = runValidation(changeValidators(e.target.value));
    setError(errorReport);
    if (!errorReport.state) setValue(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const errorReport = runValidation(blurValidators(e.target.value));
    setError(errorReport);
  };

  return { isError, onChange, onBlur };
}
