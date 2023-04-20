export interface InputStateProps {
  inputValues: string | string[];
  setInputValues: (val: string | string[]) => void;
}

export interface CardType {
  id: number;
  cardNumber: string[];
  expireDate: string[];
  ownerName: string;
  securityCode: string;
  cardPassword: string;
}

export interface PageProps {
  navigate: (page: string) => void;
}
