import { ChangeEventHandler } from 'react';

import { isNotAlphabet, isNotNumber } from '../../utils/validation';
import useFormInput from '../../utils/hooks/useFormInput';

const initialCardData = {
  cardNumber1: '',
  cardNumber2: '',
  cardNumber3: '',
  cardNumber4: '',
  expiredMonth: '',
  expiredYear: '',
  owner: '',
  cvc: '',
  cardPassword1: '',
  cardPassword2: '',
};

const useCardRegisterInput = () => {
  const [cardData, updateCardData] = useFormInput(initialCardData);

  const handleNumberChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    if (isNotNumber(value)) return;

    updateCardData(name, value);
  };

  const handleOwnerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    if (value.length === 1 && value === ' ') return;
    if (isNotAlphabet(value)) return;

    updateCardData(name, value.toUpperCase());
  };

  return { cardData, handleNumberChange, handleOwnerChange };
};
export default useCardRegisterInput;
