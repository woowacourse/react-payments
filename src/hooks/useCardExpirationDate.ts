import { useState } from 'react';

type CardExpirationDateKeys = 'month' | 'year';

type CardExpirationDate = {
  month: '' | number;
  year: '' | number;
};

const initialCardExpirationDate: CardExpirationDate = {
  month: '',
  year: '',
};

const isError = {
  month: false,
  year: false,
};

type useCardExpirationDateOptions = {
  cardExpirationDate: CardExpirationDate;
  setCardExpirationDate: (
    target: CardExpirationDateKeys
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError: typeof isError;
  errorMessage: string;
};

const useCardExpirationDate = (): useCardExpirationDateOptions => {
  const [cardExpirationDate, setCardExpirationDate] = useState(
    initialCardExpirationDate
  );
  const [isError, setIsError] = useState({
    month: false,
    year: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const isValidCardExpirationDateChange = (
    target: CardExpirationDateKeys,
    input: string
  ) => {
    if (isNaN(Number(input))) {
      setErrorMessage('숫자만 입력 가능합니다');
      return false;
    }

    if (input.length > 2) {
      setErrorMessage('2자리 숫자만 입력 가능합니다');
      return false;
    }

    //TODO: 카드 유효기간 검증 로직
    // 년도가 올해 이후인 경우 -> 합격
    // 년도가 올해인 경우, 월은 아직 지나지 않음 -> 합격
    // 년도가 올해인 경우, 월은 지남 -> 불합격
    // 년도가 작년, 작년이전인 경우 -> 불합격

    if (target === 'month') {
      if (Number(input) < 1 || Number(input) > 12) {
        setErrorMessage('01 ~ 12 사이의 숫자만 입력 가능합니다');
        return false;
      }
    }
    if (target === 'year') {
      if (Number(input) < 0 || Number(input) > 99) {
        setErrorMessage('00 ~ 99 사이의 숫자만 입력 가능합니다');
        return false;
      }
    }

    return true;
  };

  const handleCardExpirationDateChange =
    (target: CardExpirationDateKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isValid = isValidCardExpirationDateChange(
        target,
        event.target.value
      );
      if (isValid) {
        setIsError({ ...isError, [target]: false });
        setErrorMessage('');
        setCardExpirationDate({
          ...cardExpirationDate,
          [target]: Number(event.target.value),
        });
        return;
      }
      setIsError({ ...isError, [target]: true });
    };

  return {
    cardExpirationDate,
    setCardExpirationDate: handleCardExpirationDateChange,
    isError,
    errorMessage,
  };
};
export default useCardExpirationDate;
