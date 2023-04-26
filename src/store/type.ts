import { CHANGE_CARD_INPUT, REGISTER_CARD } from './action';

export type Card = {
  id: string;
  cardNumbers: string[];
  cardExpirationDate: string[];
  cardOwner: string[];
  cardCVC: string[];
  cardPWD: string[];
};

export type State = {
  cardNumbers: string[];
  cardExpirationDate: string[];
  cardOwner: string[];
  cardCVC: string[];
  cardPWD: string[];
};

export type CardContextState = {
  cardList: Card[];
  setCardList: React.Dispatch<React.SetStateAction<Card[]>>;
};

export type Action =
  | {
      type: typeof CHANGE_CARD_INPUT;
      payload: { id: number; data: string; property: string };
    }
  | {
      type: typeof REGISTER_CARD;
      payload: { card: Card };
    };
