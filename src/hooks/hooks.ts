import { useContext } from 'react';
import { AppDispatch, AppDispatchContext, AppStateContext, State } from '../context/Provider';

export function useAppState(): State {
  const state = useContext(AppStateContext);
  return state;
}

export function useAppDispatch(): AppDispatch {
  const dispatch = useContext(AppDispatchContext);
  return dispatch;
}
