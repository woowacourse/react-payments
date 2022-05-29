import { card } from "./card.interface";

interface cardsType {
  id: number;
  list: Array<card>;
}

interface errorStateType {
  errorMessage: string;
}

export type { errorStateType, cardsType };
