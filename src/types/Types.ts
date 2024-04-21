export interface FirstCardNumberStateType {
  first: number | undefined;
  setFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
  firstError: boolean;
}

export interface SecondCardNumberStateType {
  second: number | undefined;
  setSecond: (event: React.ChangeEvent<HTMLInputElement>) => void;
  secondError: boolean;
}

export interface ThirdCardNumberStateType {
  third: number | undefined;
  setThird: (event: React.ChangeEvent<HTMLInputElement>) => void;
  thirdError: boolean;
}

export interface FourthCardNumberStateType {
  fourth: number | undefined;
  setFourth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fourthError: boolean;
}

export interface ShowImageConditionType {
  isVisa: boolean;
  isMasterCard: boolean;
}

export interface MonthStateType {
  month: number | undefined;
  setMonth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  monthError: boolean;
}

export interface YearStateType {
  year: number | undefined;
  setYear: (event: React.ChangeEvent<HTMLInputElement>) => void;
  yearError: boolean;
}
