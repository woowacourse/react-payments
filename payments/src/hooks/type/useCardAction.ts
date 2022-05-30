import { CARD_ACTION } from "../useCard";

export interface cardAction {
  type: typeof CARD_ACTION[keyof typeof CARD_ACTION];
  payload: { index: number; value: string } & {
    color: string;
    cardName: string;
  };
}
