import { useState } from 'react';

const useChangeCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardNumberError, setCardNumberError] = useState({
    isError: false,
    errorMessage: '',
  });

  const handleCardNumberChange = (index: number, value: string) => {
    const newParts = [...cardNumbers];
    newParts[index] = value;

    const completeCardNumber = newParts.join('');

    const isError = !/^\d{16}$/.test(completeCardNumber);

    setCardNumbers(newParts);
    setCardNumberError({
      isError,
      errorMessage: isError ? '카드 번호는 16자리 숫자여야 합니다.' : '',
    });
  };

  return { cardNumbers, cardNumberError, handleCardNumberChange };
};

export default useChangeCardNumber;
