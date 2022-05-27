export type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "";

export type Reducer<State, Action> = (
  prevState: State,
  action: Action
) => State;

export interface CardNumbers {
  cardNoA: string;
  cardNoB: string;
  cardNoC: string;
  cardNoD: string;
}
