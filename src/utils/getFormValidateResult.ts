import {
  InputValuesInformationProps,
  createValidationInputInformation,
} from './createValidationInputInfomation';
import { formValidate } from './formValidate';

export const getFormValidateResult = (
  inputInformation: InputValuesInformationProps[]
) => {
  const { validationInputInformation, validationInputKey } =
    createValidationInputInformation(inputInformation);

  const { validationResult } = formValidate(
    validationInputInformation,
    validationInputKey
  );

  return { validationResult };
};
