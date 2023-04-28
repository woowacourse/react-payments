import {
  InputValuesInformationProps,
  createFormInputValue,
} from './createFormInputValue';
import { formValidate } from './formValidate';

export const getFormValidateResult = (
  inputInformation: InputValuesInformationProps[]
) => {
  const { inputValueInfomation, inputKey } =
    createFormInputValue(inputInformation);

  const { validationResult } = formValidate(inputValueInfomation, inputKey);

  return { validationResult };
};
