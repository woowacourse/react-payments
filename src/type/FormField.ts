export type FormFieldProps<T, K> = {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, order?: K) => void;
  onValidate: (
    rules: any,
    e: React.ChangeEvent<HTMLInputElement>,
    order?: K
  ) => void;
  onFocusout: (
    e: React.ChangeEvent<HTMLInputElement>,
    maxLength: number,
    message: string,
    order?: K
  ) => void;
  errorMessage: T;
};
