export type InputValidate = Record<string, InputDetailInfo>;

interface InputDetailInfo {
  data: HTMLInputElement[];
  maxLength: number;
  isRequired: boolean;
  validation: (value: string) => boolean;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
  errorMessage?: string;
}

const wrongInputs: HTMLInputElement[] = [];

export const formValidate = (
  inputObject: InputValidate,
  formList: readonly string[]
) => {
  type FormListType = (typeof formList)[number];

  const validationResult = formList.every((key: FormListType) =>
    getValidateResult(inputObject[key])
  );

  return { validationResult, wrongInputs };
};

const getValidateResult = (currentInfo: InputDetailInfo) => {
  const dataList = currentInfo.data;

  const result = dataList.every((data) => isValueSuccess(currentInfo, data));

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
    currentInfo: currentInfo,
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
