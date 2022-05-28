import { useContext } from 'react';
import { UserContext } from '../contexts';

function useCardState() {
  const { state } = useContext(UserContext);
  if (!state) throw new Error('Cannot find UserState');
  return state;
}

export default useCardState;
