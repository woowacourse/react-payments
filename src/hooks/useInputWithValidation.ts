import { useEffect } from "react";
import useInput2, { ActionType } from "./useInput2";

export interface Validator {
  validate: (input: string) => boolean;
  errorMessage: string;
}

const useInputWithValidation = (initialValue: string, validators: Validator[]) => {
  const [inputState, dispatch] = useInput2(initialValue);
  const setValue = (value: string) =>
    dispatch({
      type: ActionType.SET_VALUE,
      value,
    });

  useEffect(() => {
    const isValid = validators.every(({ validate }) => validate(inputState.value));
    if (isValid) {
      dispatch({
        type: ActionType.RESET_ERROR,
      });
      return;
    }

    validators.forEach(({ validate, errorMessage }) => {
      if (!validate(inputState.value)) {
        dispatch({
          type: ActionType.SET_ERROR,
          errorMessage,
        });
      }
    });
  }, [inputState.value]);

  return { inputState, setValue };
};
export default useInputWithValidation;
