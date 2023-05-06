import { useCardStore } from './useCardState';

const useResetCardState = () => {
  const {
    setCardNumber,
    setExpirationDate,
    setCardOwnerName,
    setSecurityCode,
    setFirstDigit,
    setSecondDigit,
    setSelectedCard,
    setCardNickName,
  } = useCardStore();

  const resetCardState = () => {
    setCardNumber('');
    setExpirationDate('');
    setCardOwnerName('');
    setSecurityCode('');
    setFirstDigit('');
    setSecondDigit('');
    setSelectedCard('');
    setCardNickName('');
  };

  return resetCardState;
};

export default useResetCardState;
