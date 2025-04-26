import { useContext } from 'react';
import { CardContext } from '../contexts/CardContext';

function useCard() {
  const cardContext = useContext(CardContext);
  if (!cardContext) {
    throw new Error('CardContext 외부에서 호출되고 있습니다.');
  }

  return cardContext;
}

export default useCard;
