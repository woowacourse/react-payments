import { CARD_LIST_ACTION } from "../useCardList";

export type CardListAction =
  | {
      type: typeof CARD_LIST_ACTION["ADD_CARD"];
      payload: Card;
    }
  | {
      type: typeof CARD_LIST_ACTION["REMOVE_CARD"];
      payload: { targetIndex: number };
    };
