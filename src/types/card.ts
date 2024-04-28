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

export type Input = {
  value: string;
  isError: boolean;
  isDone: boolean;
};
