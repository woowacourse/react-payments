export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleRef?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export interface CardInfoProps {
  cardInfo: {
    cardNumber: string[];
    cardExpirationDate: { month: string; year: string };
    cardCVC: string;
    cardIssuer: string;
    cardPassword: string;
  };
  updateCardInfo: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: ErrorProps;
}

export interface ErrorProps {
  cardNumberError: { errorIndex: number; errorMessage: string };
  cardExpirationDateError: { errorIndex: number; errorMessage: string };
  cardCVCError: { errorIndex: number; errorMessage: string };
  cardIssuerError: { errorIndex: number; errorMessage: string };
  cardPasswordError: { errorIndex: number; errorMessage: string };
}
