import { limitNumberLength } from "@/components/utils/numberHelper";
import { FocusEvent, useState } from "react";
import React from "react";
import { makeStringArray } from "@/components/utils/arrayHelper";

interface Props {
  initialValue: string[];
  onBlurValidate?: (input: string[]) => string;
  onChangeValidate?: (input: string[]) => string;
  maxNumberLength?: number;
  validLength?: number;
}

const useInput = ({
  initialValue = [],
  onBlurValidate,
  onChangeValidate,
  maxNumberLength: maxLength,
  validLength,
}: Props) => {
  const [input, setInput] = useState<string[]>(initialValue);
  const [errorMessages, setErrorMessages] = useState(
    makeStringArray(initialValue.length)
  );

  const updateErrorMessages = (errorMessage: string, index: number) => {
    setErrorMessages((prev) => {
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

    setInput((prev) => {
      const newInput = [...prev];
      newInput[index] = newValue;
      return newInput;
    });

    if (onChangeValidate) {
      const errorMessage = onChangeValidate([newValue]);
      if (errorMessage.length !== 0) {
        updateErrorMessages(errorMessage, index);
        return;
      }
    }

    if (onBlurValidate) {
      const errorMessage = onBlurValidate([newValue]);
      if (errorMessage.length !== 0) return;
    }

    if (!(validLength && newValue.length === validLength)) return;

    updateErrorMessages("", index);
  };

  const onBlur = (event: FocusEvent<Element, Element>, index: number) => {
    if (validLength) {
      if (input[index].length > 0 && input[index].length !== validLength) {
        updateErrorMessages("유효하지 않은 길이입니다.", index);
        return;
      }
    }

    if (onBlurValidate) {
      const errorMessage = onBlurValidate(input);
      if (errorMessage.length > 0) {
        updateErrorMessages(errorMessage, index);
        return;
      }
    }

    updateErrorMessages("", index);
  };

  return { input, errorMessages, onChange, onBlur };
};
export default useInput;
