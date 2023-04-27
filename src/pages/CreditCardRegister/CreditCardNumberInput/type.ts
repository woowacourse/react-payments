export type CreditCardNumberInputProps = {
  creditCardNumber: string;
  errorMessage: string | null;
  updateNumbers: (numbers: string) => void;
};
