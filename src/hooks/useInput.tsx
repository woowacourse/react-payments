import { limitNumberLength } from "@/components/utils/numberHelper";
import { FocusEvent, useState } from "react";
import React from "react";
import { makeStringArray } from "@/components/utils/arrayHelper";
import { Validator, validateAll } from "@/components/utils/validation";

type Validate = (input: string[]) => string;
interface Props {
  initialValue: string[];
  onBlurValidate?: Validate;
  onChangeValidate?: Validate;
  onBlurValidators?: (inputs: string[]) => Validator[];
  maxNumberLength?: number;
  validLength?: number;
}

const useInput = ({
  initialValue = [],
  onBlurValidate = (inputs) => "",
  onChangeValidate = (inputs) => "",
  onBlurValidators,
  maxNumberLength: maxLength,
  validLength,
}: Props) => {
  const [inputs, setInputs] = useState<string[]>(initialValue);
  const [errorMessages, setErrorMessages] = useState(makeStringArray(initialValue.length));

  const updateErrorMessages = (errorMessage: string, index: number) => {
    const newErrorMessages = [...errorMessages];
    newErrorMessages[index] = errorMessage;
    setErrorMessages(newErrorMessages);
  };

  const validateLength: Validate = (inputs) => {
    if (validLength === undefined) return "";
    return inputs.every((input) => input.length === 0 || input.length === validLength)
      ? ""
      : "유효하지 않은 길이입니다.";
  };

  const onBlurValidateWrapper: Validate = (inputs) => {
    if (validateLength(inputs).length > 0) return validateLength(inputs);
    if (onBlurValidate(inputs).length > 0) return onBlurValidate(inputs);
    return "";
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    if (maxLength) {
      event.target.value = limitNumberLength(event.target.value, maxLength);
    }

    const newInput = [...inputs];
    newInput[index] = event.target.value;
    setInputs(newInput);

    const errorMessageOnChange = onChangeValidate(newInput);
    if (errorMessageOnChange) {
      updateErrorMessages(errorMessageOnChange, index);
      return;
    }

    const errorMessageOnBlur = onBlurValidateWrapper(newInput);
    if (errorMessageOnBlur) return;

    updateErrorMessages("", index);
  };

  const waitAllInputCompleteValidator = {
    validate: (inputs: string[]) => inputs.every((input) => input.length !== 0),
    errorMessage: "",
  };
  const validLengthValidator = {
    validate: (inputs: string[]) => inputs.every((input) => validLength === undefined || input.length === validLength),
    errorMessage: "유효하지 않은 길이입니다.",
  };

  const onBlur = (event: FocusEvent<Element, Element>, index: number) => {
    const validators: Validator[] = [waitAllInputCompleteValidator, validLengthValidator];
    if (onBlurValidators !== undefined) validators.push(...onBlurValidators(inputs));
    const errorMessage = validateAll(validators, inputs);
    updateErrorMessages(errorMessage, index);
  };

  return { input: inputs, errorMessages, onChange, onBlur };
};
export default useInput;
