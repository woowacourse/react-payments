import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { Validator } from '../../validators/CardValidator';
import { CardFieldset, CardLegend, CardInput } from '../../style/CardStyles';
import { useCardContext } from '../../hooks/useCardContext';

export function CardNumberInput() {
  const { cardNumber, setCardNumber, setNetworkBrand } = useCardContext();

  const [isError, setError] = useState({
    'first-digits': { state: false },
    'second-digits': { state: false },
    'third-digits': { state: false },
    'fourth-digits': { state: false },
    message: '',
  });

  const handleNetworkBrand = (value: string) => {
    if (value.startsWith('4')) {
      setNetworkBrand('visa');
      return;
    }
    if (value.startsWith('5') && ['1', '2', '3', '4', '5'].includes(value[1])) {
      setNetworkBrand('master');
      return;
    }
    setNetworkBrand('');
  };

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isNumber(value);
      setError({ ...isError, [id]: { state: false }, message: '' });
      setCardNumber({ ...cardNumber, [id]: value });
    } catch (err) {
      setError({
        ...isError,
        [id]: { state: true },
        message: err instanceof Error ? err.message : '',
      });
    }
  };

  const changeFirstDigitsCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isNumber(value);
      Validator.isValidNetworkBrand(value);
      setError({ ...isError, [id]: { state: false }, message: '' });
      handleNetworkBrand(value);
      setCardNumber({ ...cardNumber, [id]: value });
    } catch (err) {
      setError({
        ...isError,
        [id]: { state: true },
        message: err instanceof Error ? err.message : '',
      });
    }
  };

  const handleBlurCardNumber = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isValidCardNumberLength(value, e.target.maxLength);
      setError({ ...isError, [id]: { state: false }, message: '' });
    } catch (err) {
      setError({
        ...isError,
        [id]: { state: true },
        message: err instanceof Error ? err.message : '',
      });
    }
  };

  return (
    <>
      <CardFieldset>
        <CardLegend>카드 번호</CardLegend>
        <CardInput
          id="first-digits"
          type="text"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber[0]}
          onChange={changeFirstDigitsCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError['first-digits'].state}
        />
        <CardInput
          id="second-digits"
          type="text"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber[1]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError['second-digits'].state}
        />
        <CardInput
          id="third-digits"
          type="text"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber[2]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError['third-digits'].state}
        />
        <CardInput
          id="fourth-digits"
          type="text"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber[3]}
          onChange={changeCardNumber}
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError['fourth-digits'].state}
        />
      </CardFieldset>
      <ErrorMessage message={isError['message']} />
    </>
  );
}

export { CardNumberInput as CardNumberInputContainer };
