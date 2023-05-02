import { createContext, Dispatch, useContext } from 'react';
import {
  Action,
  AddCardModalContextState,
  CardContextState,
  CardFormState,
} from '../../store/type';

export const CardPaymentStateContext = createContext<CardFormState | null>(null);
export const CardPaymentDispatchContext = createContext<Dispatch<Action> | null>(null);
export const CardFocusRefContext = createContext<React.MutableRefObject<HTMLInputElement[]> | null>(
  null,
);
export const MoveFocusRefContext = createContext<React.ChangeEventHandler | null>(null);
export const CardListContext = createContext<CardContextState | null>(null);
export const AddCardModalContext = createContext<AddCardModalContextState | null>(null);

export function useCardPaymentState() {
  const state = useContext(CardPaymentStateContext);
  if (state == null) throw new Error('Cannot find CardPaymentStateProvider');
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

export const useCardModalState = () => {
  const state = useContext(AddCardModalContext);

  if (state?.isModal == null) {
    throw new Error('CardModalState 가 없습니다!!');
  }

  return state.isModal;
};

export const useCardModalDispatch = () => {
  const state = useContext(AddCardModalContext);

  if (state?.toggleModal == null) {
    throw new Error('CardModalDispatcher 가 없습니다!!');
  }

  return state.toggleModal;
};
