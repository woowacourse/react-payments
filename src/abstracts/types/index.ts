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
  bank?: Bank | undefined;
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
}

export interface Bank {
  id: number;
  bankName: string;
}
