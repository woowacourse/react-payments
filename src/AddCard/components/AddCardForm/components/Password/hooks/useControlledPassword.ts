import { useCallback, useState } from "react";
import { PASSWORD_INPUT_LENGTH } from "../constants";
import { validatePassword } from "../validation";

const useControlledPassword = () => {
  const [passwordState, setPasswordState] = useState({
    value: "",
    errorMessage: "",
  });

  const handlePasswordChange = useCallback((value: string) => {
    if (value.length > PASSWORD_INPUT_LENGTH) {
      return;
    }
    const numeric = Number(value);

    if (Number.isNaN(numeric)) {
      setPasswordState((prevState) => ({
        ...prevState,
        errorMessage: validatePassword(value),
      }));
      return;
    }

    setPasswordState(() => ({
      value,
      errorMessage: validatePassword(value),
    }));
  }, []);

  return { passwordState, handlePasswordChange };
};

export default useControlledPassword;
