interface CardInputProps {
  getInputListValue: React.Dispatch<React.SetStateAction<string[]>>;
  checkValidator?: () => string;
  errorMessage?: string;
  isVisited?: boolean;
}

interface ErrorMessage {
  cardNumber: string;
  expirationDate: string;
  owner: string;
  securityCode: string;
  password: string;
}

interface Visited {
  cardNumber: boolean;
  expirationDate: boolean;
  owner?: boolean;
  securityCode: boolean;
  password: boolean;
}

export type { CardInputProps, ErrorMessage, Visited };
