export interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface OwnerName {
  ownerName: string;
}

export type Brand = "visa" | "master" | null;

export type InputType = {
  value: string;
  isError: boolean;
  isDone: boolean;
};
