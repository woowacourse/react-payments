export interface CardNumberState {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface SetCardNumberState {
  setFirst: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  setSecond: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  setThird: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  setFourth: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export interface CardNumberErrorState {
  isFirstError: boolean;
  isSecondError: boolean;
  isThirdError: boolean;
  isFourthError: boolean;
}

export interface ExpirationDateState {
  month: string;
  year: string;
}
export interface SetExpirationDateState {
  setMonth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setYear: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface ExpirationDateErrorState {
  isMonthError: boolean;
  isYearError: boolean;
}

export interface ShowImageCondition {
  visaShowCondition: boolean;
  masterCardShowCondition: boolean;
}

export interface SuccessCardInfoState {
  firstCardNumbers: string;
  cardBrand: string;
}
