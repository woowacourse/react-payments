export interface CardNumberState {
  first?: number;
  second?: number;
  third?: number;
  fourth?: number;
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
  month?: number;
  year?: number;
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
