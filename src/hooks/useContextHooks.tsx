import { createContext, Dispatch, useContext } from 'react';
import { Action, CardContextState, State } from '../store/type';

export const CardPaymentStateContext = createContext<State | null>(null);
export const CardPaymentDispatchContext = createContext<Dispatch<Action> | null>(null);
export const CardFocusRefContext = createContext<React.MutableRefObject<HTMLInputElement[]> | null>(
  null,
);
export const MoveFocusRefContext = createContext<React.ChangeEventHandler | null>(null);
export const CardListContext = createContext<CardContextState | null>(null);

export function useCardPaymentState() {
  const state = useContext(CardPaymentStateContext);
  if (!state) throw new Error('Cannot find CardPaymentStateProvider');
  return state;
}

export function useCardPaymentDispatch() {
  const dispatch = useContext(CardPaymentDispatchContext);
  if (!dispatch) throw new Error('Cannot find CardPaymentDispatchProvider');
  return dispatch;
}

export function useCardFocusRefs() {
  const focusRefs = useContext(CardFocusRefContext);
  if (!focusRefs) throw new Error('Cannot find CardFocusRefContext');
  return focusRefs;
}

export function useMoveFocus() {
  const moveFocus = useContext(MoveFocusRefContext);
  if (!moveFocus) throw new Error('Cannot find CardFocusRefContext');
  return moveFocus;
}

export const useCardListState = () => {
  const state = useContext(CardListContext);

  if (!state?.cardList) {
    throw new Error('CardState 가 없습니다!!');
  }

  return state.cardList;
};

export const useCardListDispatch = () => {
  const state = useContext(CardListContext);

  if (!state?.setCardList) {
    throw new Error('CardState 가 없습니다!!');
  }

  return state.setCardList;
};
