export type InputValidate = Record<string, InputDetailInfo>;

interface InputDetailInfo {
  data: HTMLInputElement[];
  maxLength: number;
  isRequired: boolean;
  validation: (value: string) => boolean;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
  errorMessage?: string;
}

export const formValidate = (
  inputObject: InputValidate,
  formList: readonly string[]
) => {
  type FormListType = (typeof formList)[number];

  const wrongInputs: HTMLInputElement[] = [];

  const validationResult = formList.every((key: FormListType) => {
    const current = inputObject[key];
    const dataList = current.data;

    const result = dataList.every((data) => {
      const isRequiredResult = current.isRequired
        ? data.value.length === current.maxLength
        : true;

      const validationResult = current.validation(data.value);

      const isOverMaxLength = data.value.length > current.maxLength;

      const dataValidationResult =
        isRequiredResult && validationResult && !isOverMaxLength;

      if (!dataValidationResult) {
        wrongInputs.push(data);
        if (!isRequiredResult) {
          current.setError('이 값은 필수 값 입니다. 입력해주세요.');
        } else if (isOverMaxLength) {
          current.setError(
            `이 값은 ${current.maxLength} 길이 만큼 입력 가능합니다.`
          );
        } else if (!validationResult) {
          current.setError(current.errorMessage);
        }
      }

      return dataValidationResult;
    });

    return result;
  });

  return { validationResult, wrongInputs };
};
