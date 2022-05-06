import { useContext } from 'react';

import { CardDispatchContext } from '../context/CardProvider';

const useCardDispatch = () => useContext(CardDispatchContext);

export default useCardDispatch;
