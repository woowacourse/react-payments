import {
  InputValuesInformationProps,
  createFormInputValue,
} from './createFormInputValue';
import { formValidate } from './formValidate';

export const getFormValidateResult = (
  inputInformation: InputValuesInformationProps[]
) => {
  const { inputValueInformation, inputKey } =
    createFormInputValue(inputInformation);

  const { validationResult } = formValidate(inputValueInformation, inputKey);

  return { validationResult };
};
