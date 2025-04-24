import {useEffect, useState} from 'react';
import isNumberWithinRange from '../utils/isNumberWithinRange';
import {MESSAGE} from '../components/constants/error';
import {CardForm} from '../type/Card';

const CARD_NUMBER_INPUT_MAX_LENGTH = 4;
const CVC_INPUT_MAX_LENGTH = 3;
const PASSWORD_INPUT_MAX_LENGTH = 2;

const useValidate = (changeValue: CardForm) => {
  const [errorMessages, setErrorMessages] = useState('');

  useEffect(() => {
    if (
      !isNumberWithinRange(changeValue.cardNumber, CARD_NUMBER_INPUT_MAX_LENGTH)
    ) {
      setErrorMessages((prev) => ({...prev, [order]: MESSAGE.INVALID_NUMBER}));
      return;
    }
  }, [changeValue.cardNumber]);

  useEffect(() => {
    console.log('cvc');
    if (!isNumberWithinRange(changeValue.cvcNumber, CVC_INPUT_MAX_LENGTH)) {
      setErrorMessages(MESSAGE.INVALID_NUMBER);
      return;
    }
  }, [changeValue.cvcNumber]);

  useEffect(() => {
    console.log('password');
    if (!isNumberWithinRange(changeValue.password, PASSWORD_INPUT_MAX_LENGTH)) {
      setErrorMessages(MESSAGE.INVALID_NUMBER);
      return;
    }
  }, [changeValue.password]);

  return {errorMessages};
};

export default useValidate;
