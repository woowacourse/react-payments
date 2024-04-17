type InputType = 'text' | 'number' | 'english';

interface PaymentsInputFieldProps {
  name: number;
  inputType?: InputType;
  placeholder?: string;
  maxLength?: number;
  // changeErrorMessage?: (errorMessage: string) => void;
  hasError: boolean;
  value: string;
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PaymentsInputFormProps {
  label: string;
  hasError: boolean;
  errorMessage?: string;
  inputFieldProps: PaymentsInputFieldProps[];
}

interface PaymentsFormTitleProps {
  title: string;
  subTitle?: string;
}

interface PaymentsFormSectionProps {
  formTitleProps: PaymentsFormTitleProps;
  inputFormProps: PaymentsInputFormProps;
}
