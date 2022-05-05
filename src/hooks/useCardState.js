import { useContext } from 'react';

import { CardStateContext } from '../context/CardProvider';

const useCardState = (selector = (state) => state) => selector(useContext(CardStateContext));

export default useCardState;
