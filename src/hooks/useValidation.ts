import { useEffect } from "react";
import useInput, { ActionType } from "./useInput";

export interface Validator {
  validate: (input: string) => boolean;
  errorMessage: string;
  index?: number[];
}

const useValidation = (reduced: ReturnType<typeof useInput>, validators: Validator[]) => {
  const [inputState, dispatch] = reduced;
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
  }, [inputState.value, validators, dispatch]);

  return { inputState, setValue };
};
export default useValidation;
