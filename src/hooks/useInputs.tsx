import { limitNumberLength } from "@/utils/numberHelper";
import { FocusEvent, useState } from "react";
import React from "react";
import { makeStringArray } from "@/utils/arrayHelper";

interface Props {
  initialValue: string[];
  onBlurValidate?: (input: string[]) => string;
  onChangeValidate?: (input: string[]) => string;
  maxNumberLength?: number;
  validLength?: number;
}

const useInputs = ({
  initialValue = [],
  onBlurValidate,
  onChangeValidate,
  maxNumberLength: maxLength,
  validLength,
}: Props) => {
  const [inputs, setInputs] = useState<string[]>(initialValue);
  const [errorMessages, setErrorMessages] = useState(
    makeStringArray(initialValue.length)
  );

  const updateErrorMessages = (errorMessage: string, index: number) => {
    setErrorMessages((prev: string[]) => {
      const newErrorMessages = [...prev];
      newErrorMessages[index] = errorMessage;
      return newErrorMessages;
    });
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    if (maxLength) {
      event.target.value = limitNumberLength({
        value: event.target.value,
        maxLength,
      });
    }

    const newValue = event.target.value;

    if (onChangeValidate) {
      const errorMessage = onChangeValidate([newValue]);
      if (errorMessage.length > 0) {
        updateErrorMessages(errorMessage, index);
      } else {
        updateErrorMessages("", index);
      }
    }

    if (onBlurValidate) {
      const errorMessage = onBlurValidate([newValue]);
      if (errorMessage.length == 0) {
        updateErrorMessages("", index);
      }
    }

    if (validLength && newValue.length === validLength) {
      updateErrorMessages("", index);
    }

    setInputs((prev) => {
      const newInput = [...prev];
      newInput[index] = newValue;
      return newInput;
    });
  };

  const onBlur = (event: FocusEvent<Element, Element>, index: number) => {
    if (validLength) {
      if (inputs[index].length > 0 && inputs[index].length !== validLength) {
        updateErrorMessages("유효하지 않은 길이입니다.", index);
        return;
      }
    }

    if (onBlurValidate) {
      const errorMessage = onBlurValidate(inputs);
      if (errorMessage.length > 0) {
        updateErrorMessages(errorMessage, index);
      } else {
        updateErrorMessages("", index);
      }
      return;
    }

    updateErrorMessages("", index);
  };

  return { inputs, onChange, errorMessages, onBlur };
};
export default useInputs;
