export interface CardNumberState {
  firstState: FirstState;
  secondState: SecondState;
  thirdState: ThirdState;
  fourthState: FourthState;
}
interface FirstState {
  first: number | undefined;
  setFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
  firstError: boolean;
}

interface SecondState {
  second: number | undefined;
  setSecond: (event: React.ChangeEvent<HTMLInputElement>) => void;
  secondError: boolean;
}

interface ThirdState {
  third: number | undefined;
  setThird: (event: React.ChangeEvent<HTMLInputElement>) => void;
  thirdError: boolean;
}

interface FourthState {
  fourth: number | undefined;
  setFourth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fourthError: boolean;
}

export interface ExpirationDateState {
  monthState: MonthState;
  yearState: YearState;
}

interface MonthState {
  month: number | undefined;
  setMonth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  monthError: boolean;
}

interface YearState {
  year: number | undefined;
  setYear: (event: React.ChangeEvent<HTMLInputElement>) => void;
  yearError: boolean;
}

export interface UserNameState {
  userName: string | undefined;
  setUserName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userNameError: boolean;
}
export interface ShowImageCondition {
  isVisa: boolean;
  isMasterCard: boolean;
}
