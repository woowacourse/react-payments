import { ChangeEvent, useEffect, useState } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';

function CardNumberInputField() {
  const [inputValue, setInputValue] = useState({
    cardNumberPart1: '',
    cardNumberPart2: '',
    cardNumberPart3: '',
    cardNumberPart4: '',
  });

  const [cardType, setCardType] = useState<'visa' | 'master' | null>(null);
  type ErrorType = 'noneCardType' | null;

  const [cardNumberErrors, setCardNumberErrors] = useState<
    Record<string, { isError: boolean; errorType: ErrorType }>
  >({
    cardNumberPart1: { isError: false, errorType: null },
    cardNumberPart2: { isError: false, errorType: null },
    cardNumberPart3: { isError: false, errorType: null },
    cardNumberPart4: { isError: false, errorType: null },
  });

  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue.length <= 4) {
      if (name === 'cardNumberPart1') {
        setCardNumberErrors((prevValue) => ({
          ...prevValue,
          [name]: { isError: false, errorType: null },
        }));
        if (value.length <= 2) {
          if (value[0] === '4') setCardType('visa');
          else if (value >= '51' && value <= '55') setCardType('master');
          else setCardType(null);
        } else if (cardType === null) {
          setCardNumberErrors((prevValue) => ({
            ...prevValue,
            [name]: { isError: true, errorType: 'noneCardType' },
          }));
        }
      }
      setInputValue((prevValue) => ({ ...prevValue, [name]: numericValue }));
    }
  };

  const ERROR_TYPE_TO_MESSAGE = {
    noneCardType: '유효하지 않은 카드 번호입니다. 카드 번호를 확인해주세요',
  };

  useEffect(() => {
    const errorStatus = Object.values(cardNumberErrors).find(
      ({ isError }) => isError
    );

    if (errorStatus && errorStatus.errorType)
      setErrorMessage(ERROR_TYPE_TO_MESSAGE[errorStatus.errorType]);
    else setErrorMessage('');
  }, [cardNumberErrors]);

  return (
    <BaseInputField label="카드 번호" errorMessage={errorMessage}>
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart1}
        onChange={onChange}
        name="cardNumberPart1"
        isError={cardNumberErrors.cardNumberPart1.isError}
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart2}
        onChange={onChange}
        name="cardNumberPart2"
        isError={cardNumberErrors.cardNumberPart2.isError}
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart3}
        onChange={onChange}
        name="cardNumberPart3"
        isError={cardNumberErrors.cardNumberPart3.isError}
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart4}
        onChange={onChange}
        name="cardNumberPart4"
        isError={cardNumberErrors.cardNumberPart4.isError}
      />
    </BaseInputField>
  );
}

export default CardNumberInputField;
