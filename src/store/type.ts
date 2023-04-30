import { CHANGE_CARD_INPUT, CHANGE_CARD_NAME, REGISTER_CARD } from './action';

export type Card = {
  id: string;
  nickName?: string;
  cardName: string;
  cardNumbers: string[];
  cardExpirationDate: string[];
  cardOwner: string[];
  cardCVC: string[];
  cardPWD: string[];
};

export type CardFormState = {
  cardName: string;
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

export type AddCardModalContextState = {
  isModal: boolean;
  toggleModal: () => void;
};

export type Action =
  | {
      type: typeof CHANGE_CARD_INPUT;
      payload: { id: number; data: string; property: string };
    }
  | {
      type: typeof REGISTER_CARD;
      payload: { card: Card };
    }
  | {
      type: typeof CHANGE_CARD_NAME;
      payload: { cardName: string };
    };
