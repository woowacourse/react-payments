import { CARD_LIST_ACTION } from "../useCardList";

export interface CardListAction {
  type: typeof CARD_LIST_ACTION[keyof typeof CARD_LIST_ACTION];
  payload: Card & { targetIndex: number };
}
