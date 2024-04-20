import { useState } from "react";
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";
import useUpdatePreviewState from "./useUpdatePreviewState";

const useNameFormSection = ({ changeName }: UseNameFormSectionProps) => {
  const [inputState, setInputState] = useUpdatePreviewState(
    {
      0: {
        value: '',
        hasError: false,
        hasFocus: false,
        isFilled: false,
      }
    }
  );
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (newValue.length <= OPTION.nameMaxLength && !REGEX.name.test(newValue)) {
      setInputState((prevState) => ({
        0: {
          ...prevState[0],
          value: newValue.slice(0, newValue.length - 1),
          hasError: true,
        },
      }), (newState: InputStates) => {
        changeName(newState[0].value)
      });
      setErrorMessage(ERROR_MESSAGE.onlyEnglish);
    } else if (newValue.length > OPTION.nameMaxLength) {
      setInputState((prevState) => ({
        0: {
          ...prevState[0],
          value: newValue.slice(0, OPTION.nameMaxLength),
          hasError: false,
        },
      }), (newState: InputStates) => {
        changeName(newState[0].value)
      });
    } else {
      setInputState((prevState) => ({
        0: {
          ...prevState[0],
          value: newValue,
          hasError: false,
          isFilled: true
        },
      }), (newState: InputStates) => {
        changeName(newState[0].value)
      });
    }
  };

  const handleOnFocus = () => {
    setInputState((prevState) => ({
      0: {
        ...prevState[0],
        hasFocus: true,
      },
    }));

    resetErrors();
  };

  const handleOnBlur = () => {
    setInputState((prevState) => ({
      0: {
        ...prevState[0],
        hasFocus: false,
      },
    }));

    if (checkHasNoFocus()) {
      resetErrors();
    }
  };

  const checkHasNoFocus = () => {
    return Object.values(inputState).every((field) => !field.hasFocus);
  }

  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[key];
      acc[key] = { ...field, hasError: false };
      return acc;
    }, {});

    setInputState(() => newState, (newState: InputStates) => {
      changeName(newState[0].value);
    });
    setErrorMessage('');
  };


  return [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default useNameFormSection;