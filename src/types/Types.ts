export interface CardNumberState {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface SetCardNumberState {
  onChangeFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSecond: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeThird: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFourth: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  onChangeMonth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeYear: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
