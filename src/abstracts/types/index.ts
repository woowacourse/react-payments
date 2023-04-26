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
  navigate: (page: Page) => void;
}

export enum Page {
  list = 'list',
  register = 'register',
}

export interface Bank {
  id: number;
  bankName: string;
  BankImage: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}
