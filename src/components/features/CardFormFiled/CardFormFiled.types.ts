export type CardFormFiledProps = {
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CardFormFiledType = 'cardNumber' | 'expireDate' | 'CVC';
