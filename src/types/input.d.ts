export type InputProps = {
  values: string[];
  onChange: ({ e, idx }: HandleInputParams) => void;
  onValidChange: (isValid: boolean) => void;
};
