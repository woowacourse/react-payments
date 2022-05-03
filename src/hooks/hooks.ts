import { useContext } from 'react';
import {
  AppDispatch,
  AppDispatchContext,
  AppStateContext,
  createAction,
  State,
} from '../context/Provider';
import { ActionType } from '../types';

export function useAppState(): State {
  const state = useContext(AppStateContext);
  return state;
}

export function useAppDispatch(): AppDispatch {
  const dispatch = useContext(AppDispatchContext);
  return dispatch;
}
