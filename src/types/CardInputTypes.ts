export interface CardInputProps {
  first: number | null;
  second: number | null;
  third: number | null;
  fourth: number | null;
  MM: number | null;
  YY: number | null;
  CVC: number | null;
}

export type InputKeyType =
  | "first"
  | "second"
  | "third"
  | "fourth"
  | "MM"
  | "YY"
  | "CVC";
