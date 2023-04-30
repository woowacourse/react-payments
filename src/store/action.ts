export const CHANGE_CARD_INPUT = 'CHANGE_CARD_INPUT' as const;
export const REGISTER_CARD = 'REGISTER_CARD' as const;
export const CHANGE_CARD_NAME = 'CHANGE_CARD_NAME' as const;

export const changeNumbersAction = (id: number, data: string) => {
  return { type: CHANGE_CARD_INPUT, payload: { id, data, property: 'cardNumbers' } };
};

export const changeCardExpirationDate = (id: number, data: string) => {
  return { type: CHANGE_CARD_INPUT, payload: { id, data, property: 'cardExpirationDate' } };
};

export const changeCardOwner = (id: number, data: string) => {
  return { type: CHANGE_CARD_INPUT, payload: { id, data, property: 'cardOwner' } };
};

export const changeCardCVCAction = (id: number, data: string) => {
  return { type: CHANGE_CARD_INPUT, payload: { id, data, property: 'cardCVC' } };
};

export const changeCardPWD = (id: number, data: string) => {
  return { type: CHANGE_CARD_INPUT, payload: { id, data, property: 'cardPWD' } };
};

export const changeCardName = (cardName: string) => {
  return { type: CHANGE_CARD_NAME, payload: { cardName } };
};
