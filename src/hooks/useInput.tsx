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
        setErrorMessages((prev) => {
          const newErrorMessages = [...prev];
          newErrorMessages[index] = errorMessage;
          return newErrorMessages;
        });
      } else {
        setErrorMessages((prev) => {
          const newErrorMessages = [...prev];
          newErrorMessages[index] = "";
          return newErrorMessages;
        });
      }
    }

    setInput((prev) => {
      const newInput = [...prev];
      newInput[index] = newValue;
      return newInput;
    });
  };

  const onBlur = (event: FocusEvent<Element, Element>, index: number) => {
    if (validLength) {
      if (input[index].length > 0 && input[index].length !== validLength) {
        setErrorMessages((prev) => {
          const newErrorMessages = [...prev];
          newErrorMessages[index] = "유효하지 않은 길이입니다.";
          return newErrorMessages;
        });
        return;
      }
    }

    if (onBlurValidate) {
      const errorMessage = onBlurValidate(input);
      if (errorMessage.length > 0) {
        setErrorMessages((prev) => {
          const newErrorMessages = [...prev];
          newErrorMessages[index] = errorMessage;
          return newErrorMessages;
        });
      } else {
        setErrorMessages((prev) => {
          const newErrorMessages = [...prev];
          newErrorMessages[index] = "";
          return newErrorMessages;
        });
      }
      return;
    }

    setErrorMessages((prev) => {
      const newErrorMessages = [...prev];
      newErrorMessages[index] = "";
      return newErrorMessages;
    });
  };

  return { input, onChange, errorMessages, onBlur };
};
export default useInput;
