import { limitNumberLength } from "@/components/utils/numberHelper";
import { FocusEvent, useState } from "react";
import React from "react";
import { makeStringArray } from "@/components/utils/arrayHelper";

interface Props {
  initialValue: string[];
  validate?: (input: string[]) => string;
  maxLength?: number;
  validLength?: number;
}

const useInput = ({
  initialValue = [],
  validate,
  maxLength,
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
    setInput((prev) => {
      const newInput = [...prev];
      newInput[index] = newValue;

      if (validate) {
        const validationError = validate(newInput);
        if (validationError) {
          setErrorMessages((prev) => {
            const newErrorMessages = [...prev];
            newErrorMessages[index] = "유효하지 않은 입력입니다.";
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
    setErrorMessages((prev) => {
      const newErrorMessages = [...prev];
      newErrorMessages[index] = "";
      return newErrorMessages;
    });
  };

  return { input, onChange, errorMessages, onBlur };
};
export default useInput;
