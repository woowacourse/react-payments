export type CreditCardPasswordInputProps = {
  creditCardPassword: {
    first: string;
    second: string;
  };
  errorMessage: string | null;
  updatePassword: {
    first: (newPassword: string) => void;
    second: (newPassword: string) => void;
  };
};
