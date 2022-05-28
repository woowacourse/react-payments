import { CardData, CardName, CardNumber } from 'types/Card';
import { NumberInput } from 'types/SomeInput';

type CardAction =
  | { type: 'CARD_ADD'; value: CardData }
  | { type: 'CARD_NAME_EDIT'; targetCardNumber: NumberInput<string>; value: CardName }
  | { type: 'DELETE'; value: NumberInput<string> };

const CARD_ACTION = {
  ADD: 'CARD_ADD',
  NAME_EDIT: 'CARD_NAME_EDIT',
  DELETE: 'DELETE',
} as const;

const initialCardData: CardData[] = [];

function CardReducer(state: CardData[], action: CardAction) {
  switch (action.type) {
    case CARD_ACTION.ADD:
      return state.concat(action.value);
    case CARD_ACTION.NAME_EDIT:
      return state.map(card => {
        if (card.cardNumber?.value === action.targetCardNumber) {
          card.cardName = action.value;
        }
        return card;
      });
    case CARD_ACTION.DELETE:
      return state.filter(card => card.cardNumber?.value !== action.value);
  }
}

export { CardReducer, initialCardData, CARD_ACTION, CardAction };
