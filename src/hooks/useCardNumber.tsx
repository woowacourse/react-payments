import { useState } from 'react';

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [isError, setIsError] = useState([false, false, false, false]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const { value } = e.target;

    if (value.length > 4) {
      return;
    }

    const isNotValid =
      value.length < 4 || value.length > 4 || Number(value) < 0;
    const copyError = [...isError];
    copyError[n] = isNotValid;
    setIsError(copyError);

    const copy = [...cardNumber];
    copy[n] = value;
    setCardNumber(copy);
  };

  const checkCardNumberError = () => {
    return isError.some((v) => v === true);
  };

  return {
    cardNumber,
    onChange,
    checkCardNumberError,
    isError,
  };
}

export default useCardNumber;
