export type InputProps<T> = {
  type: 'string' | 'number' | 'date' | 'datetime' | 'password';
  value: T;
  width: string;
  textAlign: 'center' | 'start';
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  background?: string;
  underline?: boolean;
};

export type InputValueType = string | number | readonly string[] | undefined;

export type InputStyleProps = {
  width: string;
  textAlign: string;
  background?: string;
  underline: boolean;
};
