export type CreditCardOwnerInputProps = {
  creditCardOwner: string;
  errorMessage: string | null;
  updateOwner: (newName: string) => void;
};
