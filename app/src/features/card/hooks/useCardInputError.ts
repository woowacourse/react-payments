import { useState } from "react";
import { runValidation } from "../Utils";

type ErrorReport = { state: boolean; message: string };
type CardError = ErrorReport | Record<string, ErrorReport>;

export default function useCardInputError<T extends CardError>(
  defaultError: T,
) {
  const [isError, setError] = useState<T>(defaultError);

  const handleChangeError = (validators: (() => void)[], field?: string) => {
    const errorReport = runValidation(validators);
    if (field) {
      setError({ ...isError, [field]: errorReport });
      return errorReport;
    }
    setError(errorReport as T);
    return errorReport;
  };

  const handleOnBlurError = (validators: (() => void)[], field?: string) => {
    const errorReport = runValidation(validators);
    if (field) {
      setError({ ...isError, [field]: errorReport });
      return;
    }
    setError({ ...isError, ...errorReport });
  };

  return [isError, handleChangeError, handleOnBlurError] as [
    T,
    typeof handleChangeError,
    typeof handleOnBlurError,
  ];
}
