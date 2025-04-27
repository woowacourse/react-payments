export type InputProps = {
  values: string[];
  onChange: ({ e, idx }: HandleInputParams) => void;
  onValidChange: (isValid: boolean) => void;
};

export type HandleInputParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  idx: number;
};
