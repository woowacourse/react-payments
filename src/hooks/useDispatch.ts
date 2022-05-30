import { useContext } from 'react';
import { UserContext } from '../contexts';

function useDispatch() {
  const { dispatch } = useContext(UserContext);
  if (!dispatch) throw new Error('Cannot find UserDispatch');
  return dispatch;
}

export default useDispatch;
