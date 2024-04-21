import { useState } from "react";

type InitialValuesType = CardNumbers | ExpirationDate | OwnerName;

interface UseAddCardInput<T extends InitialValuesType> {
  initialValues: T;
  initialErrors: Record<keyof T, boolean>;
  validateInputOnChange: ({ name, value }: { name?: string; value: string }) => {
    isValid: boolean;
    errorMessage: string;
  };
  validateInputOnBlur?: ({ name, value }: { name?: string; value: string }) => {
    isValid: boolean;
    errorMessage: string;
  };
  processData: () => void;
}

export default function UseAddCardInput<T extends InitialValuesType>({
  validateInputOnChange,
  validateInputOnBlur,
  processData,
  initialValues,
  initialErrors,
}: UseAddCardInput<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [isError, setIsError] = useState<Record<keyof T, boolean>>(initialErrors);

  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const validation = validateInputOnChange({ name, value });

    if (!validation.isValid) {
      setErrorMessage(validation.errorMessage);
      setIsError({ ...isError, [name]: true });
    } else {
      setErrorMessage("");
      setIsError({ ...isError, [name]: false });
      setValues({
        ...values,
        [name]: name === "ownerName" ? value.toUpperCase() : value,
      });
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (validateInputOnBlur) {
      const validation = validateInputOnBlur({ name, value });
      if (!validation.isValid) {
        setErrorMessage(validation.errorMessage);
        setIsError({ ...isError, [name]: true });
      } else {
        setErrorMessage("");
        setIsError({ ...isError, [name]: false });
        processData();
      }
    } else {
      processData();
    }
  };

  return {
    values,
    errorMessage,
    isError,
    onChange,
    onBlur,
  } as const;
}
