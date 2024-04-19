export interface FirstState {
  first: number | undefined;
  setFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
  firstError: boolean;
}

export interface SecondState {
  second: number | undefined;
  setSecond: (event: React.ChangeEvent<HTMLInputElement>) => void;
  secondError: boolean;
}

export interface ThirdState {
  third: number | undefined;
  setThird: (event: React.ChangeEvent<HTMLInputElement>) => void;
  thirdError: boolean;
}

export interface FourthState {
  fourth: number | undefined;
  setFourth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fourthError: boolean;
}

export interface ShowImageCondition {
  isVisa: boolean;
  isMasterCard: boolean;
}

export interface MonthState {
  month: number | undefined;
  setMonth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  monthError: boolean;
}

export interface YearState {
  year: number | undefined;
  setYear: (event: React.ChangeEvent<HTMLInputElement>) => void;
  yearError: boolean;
}
