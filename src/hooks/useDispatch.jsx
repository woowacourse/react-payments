import { useContext } from 'react';
import { UserDispatch } from '../contexts';

function useDispatch() {
  const dispatch = useContext(UserDispatch);
  if (!dispatch) throw new Error('Cannot find UserDispatch');
  return dispatch;
}

export default useDispatch;
