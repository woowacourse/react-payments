import { useEffect } from "react";
import useInput2, { ActionType } from "./useInput2";

interface Validator {
  validate: (input: string) => boolean;
  errorMessage: string;
}

const useInputWithValidation = (
  initialValue: string,
  validators: Validator[]
) => {
  const [inputState, dispatch] = useInput2(initialValue);
  const setValue = (value: string) =>
    dispatch({
      type: ActionType.SET_VALUE,
      value,
    });

  useEffect(() => {
    validators.forEach(({ validate, errorMessage }) => {
      if (!validate(inputState.value)) {
        dispatch({
          type: ActionType.SET_ERROR,
          errorMessage,
        });
      } else {
        dispatch({
          type: ActionType.RESET_ERROR,
        });
      }
    });
  }, [inputState.value]);

  return { inputState, setValue };
};
export default useInputWithValidation;
