export type CreditCardExpiryInputProps = {
  creditCardExpiry: string;
  errorMessage: string | null;
  updateExpiry: (newExpiry: string) => void;
};
