import { useContext } from 'react';
import { UserState } from '../contexts';

function useCardState() {
  const state = useContext(UserState);
  if (!state) throw new Error('Cannot find UserState');
  return state;
}

export default useCardState;
