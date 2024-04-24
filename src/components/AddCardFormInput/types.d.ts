interface CustomInputHandlerProps<T> {
  isValid: boolean;
  errorMessage: string;
  name: keyof T;
  value: string;
}

interface InputProps<T> {
  values: T;
  errorMessage: string;
  isError: Record<string, boolean>;
  onChange: (props: CustomInputHandlerProps<T>) => void;
  onBlur: (props: CustomInputHandlerProps<T>) => void;
}
