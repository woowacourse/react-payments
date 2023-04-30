import { CHANGE_CARD_INPUT, CHANGE_CARD_NAME } from './action';
import { Action, CardFormState } from './type';

const makeInputState = (
  state: CardFormState,
  id: number,
  data: string,
  property: keyof Omit<CardFormState, 'cardName'>,
): CardFormState => {
  const copyData = [...state[property]];
  copyData[id] = data;

  return { ...state, [property]: copyData };
};

function reducer(state: CardFormState, action: Action): CardFormState {
  switch (action.type) {
    case CHANGE_CARD_INPUT:
      return makeInputState(
        state,
        action.payload.id,
        action.payload.data,
        action.payload.property as keyof Omit<CardFormState, 'cardName'>,
      );

    case CHANGE_CARD_NAME:
      return { ...state, cardName: action.payload.cardName };

    default:
      return state;
  }
}

export default reducer;
