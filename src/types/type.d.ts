type InputType = 'text' | 'number' | 'english';

interface PaymentsInputFieldProps {
  inputType?: InputType;
  placeholder?: string;
  maxLength?: number;
  hasError?: boolean;
}

interface PaymentsInputFormProps {
  label: string;
  hasError: boolean;
  errorMessage: string;
  inputFieldProps: PaymentsInputFieldProps[];
}

interface PaymentsFormTitleProps {
  title: string;
  subTitle?: string;
}
