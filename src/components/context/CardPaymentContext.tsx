import { createContext, Dispatch, useContext } from 'react';
import { Action, CardFormState } from '../../store/type';

export const CardPaymentStateContext = createContext<CardFormState | null>(null);
export const CardPaymentDispatchContext = createContext<Dispatch<Action> | null>(null);
export const CardFocusRefContext = createContext<React.MutableRefObject<HTMLInputElement[]> | null>(
  null,
);
export const MoveFocusRefContext = createContext<React.ChangeEventHandler | null>(null);

export function useCardPaymentState() {
  const state = useContext(CardPaymentStateContext);
  if (state === null) throw new Error('Cannot find CardPaymentStateProvider');
  return state;
}

export function useCardPaymentDispatch() {
  const dispatch = useContext(CardPaymentDispatchContext);
  if (dispatch === null) throw new Error('Cannot find CardPaymentDispatchProvider');
  return dispatch;
}

export function useCardFocusRefs() {
  const focusRefs = useContext(CardFocusRefContext);
  if (focusRefs === null) throw new Error('Cannot find CardFocusRefContext');
  return focusRefs;
}

export function useMoveFocus() {
  const moveFocus = useContext(MoveFocusRefContext);
  if (moveFocus === null) throw new Error('Cannot find CardFocusRefContext');
  return moveFocus;
}
