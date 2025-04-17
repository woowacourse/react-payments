import { useState } from 'react';

function useCardCVC() {
  const [cardCVC, setCardCVC] = useState('');
  const [isCardCVCError, setIsCardCVCError] = useState(false);

  const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > 3) {
      return;
    }

    const isNotValid =
      value.length < 3 || value.length > 3 || Number(value) < 0;

    setIsCardCVCError(isNotValid);
    setCardCVC(value);
  };

  const checkCardCVCError = () => {
    return isCardCVCError;
  };
  return {
    cardCVC,
    isCardCVCError,
    onChangeCVC,
    checkCardCVCError,
  };
}

export default useCardCVC;
