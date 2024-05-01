interface CustomInputHandlerArgs<T> {
  isValid: boolean;
  errorMessage: string;
  name: keyof T;
  value: string;
}

interface InputProps<T> {
  values: T;
  errorMessage: string;
  isError: Record<string, boolean>;
  isFieldComplete: boolean;
  handleInputChange: (args: CustomInputHandlerArgs<T>) => void;
  handleInputBlur: (args: CustomInputHandlerArgs<T>) => void;
}
