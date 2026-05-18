export interface CardFormPropsType {
  refs: {
    cardNumberFirstRef: React.RefObject<HTMLInputElement | null>;
    expiryMonthRef: React.RefObject<HTMLInputElement | null>;
    cardCVCRef: React.RefObject<HTMLInputElement | null>;
    cardPasswordRef: React.RefObject<HTMLInputElement | null>;
  };
  currentStep: number;
  isFormComplete: boolean;
  onCardNumberComplete: () => void;
  onCardCompanySelected: () => void;
  onCardExpiryDateComplete: () => void;
  onCardCVCComplete: () => void;
  handleFormSubmit: React.FormEventHandler<HTMLFormElement>;
}
