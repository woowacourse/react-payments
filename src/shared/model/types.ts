export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export interface CardInfoProps {
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
  cardCVC: string;
  cardIssuer: string;
  cardPassword: string;
  handleCardInfoChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: {
    cardNumberError: { errorIndex: number; errorMessage: string };
    cardExpirationDateError: { errorIndex: number; errorMessage: string };
    cardCVCError: { errorIndex: number; errorMessage: string };
    cardIssuerError: { errorIndex: number; errorMessage: string };
    cardPasswordError: { errorIndex: number; errorMessage: string };
  };
}

export interface ErrorProps {
  cardNumberError: { errorIndex: number; errorMessage: string };
  cardExpirationDateError: { errorIndex: number; errorMessage: string };
  cardCVCError: { errorIndex: number; errorMessage: string };
  cardIssuerError: { errorIndex: number; errorMessage: string };
  cardPasswordError: { errorIndex: number; errorMessage: string };
}
