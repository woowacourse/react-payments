export type InputValidate = Record<string, InputDetailInfo>[];

export interface InputDetailInfo {
  element: HTMLInputElement;
  name: string;
  maxLength: number;
  isRequired: boolean;
  validation: (value: string) => boolean;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
  errorMessage?: string;
}

const wrongInputs: HTMLInputElement[] = [];

export const formValidate = (
  inputObject: InputDetailInfo[],
  formList: readonly string[]
) => {
  type FormListType = (typeof formList)[number];

  const validationResult = formList.every((key: FormListType) => {
    const current = inputObject.find((item) => item.name === key);
    if (!current) return false;

    return getValidateResult(current);
  });

  if (wrongInputs.length > 0) {
    wrongInputs[0].focus();
  }

  return { validationResult };
};

const getValidateResult = (currentInfo: InputDetailInfo) => {
  const data = currentInfo.element;

  const result = isValueSuccess(currentInfo, data);

  return result;
};

const isValueSuccess = (
  currentInfo: InputDetailInfo,
  data: HTMLInputElement
) => {
  const isRequiredResult = getRequireResult(currentInfo, data);

  const validateResult = currentInfo.validation(data.value);

  const isOverMaxLength = data.value.length > currentInfo.maxLength;

  const dataValidationResult =
    isRequiredResult && validateResult && !isOverMaxLength;

  const validateResultAndData = {
    isRequiredResult,
    validateResult,
    isOverMaxLength,
    currentInfo,
  };

  if (!dataValidationResult) {
    wrongInputs.push(data);
    setErrorMessage(validateResultAndData);
  }

  return dataValidationResult;
};

const getRequireResult = (
  currentInfo: InputDetailInfo,
  currentInput: HTMLInputElement
) => {
  if (!currentInfo.isRequired) return true;

  return currentInput.value.length === currentInfo.maxLength;
};

const setErrorMessage = ({
  isRequiredResult,
  validateResult,
  isOverMaxLength,
  currentInfo,
}: {
  isRequiredResult: boolean;
  validateResult: boolean;
  isOverMaxLength: boolean;
  currentInfo: InputDetailInfo;
}) => {
  if (!isRequiredResult) {
    currentInfo.setError('이 값은 필수 값 입니다. 입력해주세요.');
    return;
  }

  if (isOverMaxLength) {
    currentInfo.setError(
      `이 값은 ${currentInfo.maxLength} 길이 만큼 입력 가능합니다.`
    );

    return;
  }
  if (!validateResult) {
    currentInfo.setError(currentInfo.errorMessage);
  }
};
