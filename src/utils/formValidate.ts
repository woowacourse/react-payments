import { type UseInputProps } from '../hooks/useInput';

const wrongInputs: HTMLInputElement[] = [];

/*
받은 오브젝트의 키 값을 이용해서 하나씩 유효성 검사를 합니다.

유효성 검사 결과를 반환합니다.
*/
export const formValidate = (inputObject: Record<string, UseInputProps>) => {
  const formList = Object.keys(inputObject);

  type FormListType = (typeof formList)[number];

  const validationResult = formList.every((key: FormListType) => {
    const current = inputObject[key];
    if (!current) return false;

    return isValueSuccess(current);
  });

  if (wrongInputs.length > 0) {
    wrongInputs[0].focus();
  }

  return { validationResult };
};

const isValueSuccess = (currentInfo: UseInputProps) => {
  const input = currentInfo.inputRef.current;

  if (!input) return false;

  const isRequiredResult = getRequireResult(currentInfo, input);

  const validateResult = currentInfo.validate(input.value);

  const isOverMaxLength = input.value.length > currentInfo.maxLength;

  const dataValidationResult =
    isRequiredResult && validateResult && !isOverMaxLength;

  const validateResultAndData = {
    isRequiredResult,
    validateResult,
    isOverMaxLength,
    currentInfo,
  };

  if (!dataValidationResult) {
    wrongInputs.push(input);
    setErrorMessage(validateResultAndData);
  }

  return dataValidationResult;
};

const getRequireResult = (
  currentInfo: UseInputProps,
  currentInput: HTMLInputElement
) => {
  if (!currentInfo.required) return true;

  return currentInput.value.length > 0;
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
  currentInfo: UseInputProps;
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
    currentInfo.setError(currentInfo.error);
  }
};
