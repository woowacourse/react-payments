export type CreditCardCVCInputProps = {
  creditCardCVC: string;
  errorMessage: string | null;
  updateCVC: (newCVC: string) => void;
};
