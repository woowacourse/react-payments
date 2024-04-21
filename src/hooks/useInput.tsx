import { limitNumberLength } from "@/components/utils/numberHelper";
import { FocusEvent, useState } from "react";
import React from "react";
import { makeStringArray } from "@/components/utils/arrayHelper";
import { Validator, releaseAll, validateAll } from "@/components/utils/validation";

type Validate = (input: string[]) => string;
interface Props {
  initialValue: string[];
  onChangeValidators?: (inputs: string[]) => Validator[];
  onBlurValidators?: (inputs: string[]) => Validator[];
  maxNumberLength?: number;
  validLength?: number;
}

const useInput = ({
  initialValue = [],
  onChangeValidators: getOnChangeValidators,
  onBlurValidators: getOnBlurValidators,
  maxNumberLength: maxLength,
  validLength,
}: Props) => {
  const [inputs, setInputs] = useState<string[]>(initialValue);
  const [errorMessages, setErrorMessages] = useState(makeStringArray(initialValue.length));

  const updateErrorMessages = (errorMessage: string, index: number) => {
    setErrorMessages((prev) => {
      const newErrorMessages = [...prev];
      newErrorMessages[index] = errorMessage;
      return newErrorMessages;
    });
  };

  const waitAllInputCompleteValidator = {
    validate: (inputs: string[]) => inputs.every((input) => input.length !== 0),
    errorMessage: "",
  };
  const validLengthValidator = {
    validate: (inputs: string[]) => inputs.every((input) => validLength === undefined || input.length === validLength),
    errorMessage: "유효하지 않은 길이입니다.",
  };

  const onBlurValidators: Validator[] = [validLengthValidator];
  if (getOnBlurValidators !== undefined) onBlurValidators.push(...getOnBlurValidators(inputs));

  // const validateLength: Validate = (inputs) => {
  //   if (validLength === undefined) return "";
  //   return inputs.every((input) => input.length === 0 || input.length === validLength)
  //     ? ""
  //     : "유효하지 않은 길이입니다.";
  // };

  const onChangeValidators: Validator[] = [];
  if (getOnChangeValidators !== undefined) {
    onChangeValidators.push(...getOnChangeValidators(inputs));
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    // if (maxLength) {
    //   event.target.value = limitNumberLength(event.target.value, maxLength);
    // }

    const newInput = [...inputs];
    newInput[index] = event.target.value;
    setInputs(newInput);

    const newErrorMessages = releaseAll(onBlurValidators, newInput, errorMessages);
    // setErrorMessages(newErrorMessages);

    const errorMessage = validateAll(onChangeValidators, newInput);
    newErrorMessages[index] = errorMessage;
    setErrorMessages(newErrorMessages);

    // const errorMessageOnChange = onChangeValidate(newInput);
    // if (errorMessageOnChange) {
    //   updateErrorMessages(errorMessageOnChange, index);
    //   return;
    // }

    // const errorMessageOnBlur = onBlurValidateWrapper(newInput);
    // if (errorMessageOnBlur) return;

    // updateErrorMessages("", index);
  };

  const onBlur = (event: FocusEvent<Element, Element>, index: number) => {
    const errorMessage = validateAll(onBlurValidators, inputs);
    updateErrorMessages(errorMessage, index);
  };

  return { input: inputs, errorMessages, onChange, onBlur };
};
export default useInput;
