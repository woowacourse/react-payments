export interface CustomInputProps {
  type: string;
  placeholder: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  error?: boolean;
}

export interface CardInfoProps {
  cardNumber: string[];
  cardExpirationDate: { month: string; year: string };
  cardCVC: string;
}
