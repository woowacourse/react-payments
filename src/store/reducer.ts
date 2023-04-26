import { CHANGE_CARD_INPUT } from './action';
import { Action, State } from './type';

const makeInputState = (state: State, id: number, data: string, property: keyof State): State => {
  const copyData = [...state[property]];
  copyData[id] = data;

  return { ...state, [property]: copyData };
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case CHANGE_CARD_INPUT:
      return makeInputState(
        state,
        action.payload.id,
        action.payload.data,
        action.payload.property as keyof State,
      );

    default:
      return state;
  }
}

export default reducer;
