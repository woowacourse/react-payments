export interface InputStateProps {
  inputValue: string;
  setInputValue: (val: string) => void;
}

export interface InputArrayStateProps {
  inputArrayValue: string[];
  setInputArrayValue: (val: string[]) => void;
}

export interface CardType {
  id: number;
  cardNumber: string[];
  expireDate: string[];
  ownerName: string;
  securityCode: string;
  cardPassword: string;
  bank?: Bank;
  alias?: string;
}

export interface PageProps {
  navigate: (page: Page, data?: any) => void;
  navData?: any;
}

export enum Page {
  list = 'list',
  register = 'register',
  aliasSet = 'aliasSet',
  loading = 'loading',
}

export interface Bank {
  id: number;
  bankName: string;
}
