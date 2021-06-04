import React from 'react';
import { Input } from '../../../components';
import { ERROR_MESSAGE } from '../../../constants';
import useCheckValidity from '../../../hooks/useCheckValidity';
import { MMYYDateFormatter } from '../../../utils/formatter';
import { isValidDateFormat } from './../validator';

const ExpirationDateInput = ({ expirationDate, setInput }) => {
  const [error, setError, checkValidity] = useCheckValidity(
    isValidDateFormat,
    expirationDate,
    ERROR_MESSAGE.INVALID_EXPIRATION_DATE
  );

  const onChange = (event) => {
    const inputValue = event.target.value.replace('/', '');

    try {
      if (isNaN(inputValue)) throw Error('숫자만 입력가능합니다.');

      const formattedDate = MMYYDateFormatter(inputValue);
      setInput('expirationDate', formattedDate);
    } catch (error) {
      setInput('expirationDate', '');
      setError(error.message);
    }
  };

  const onClick = () => {
    setInput('expirationDate', '');
  };

  return (
    <Input
      type="text"
      label="만료일"
      inputStyle={{ width: '7rem' }}
      placeholder="MM/YY"
      textAlign="center"
      maxLength="5"
      inputMode="numeric"
      value={expirationDate}
      onChange={onChange}
      onClick={onClick}
      onBlur={checkValidity}
      errorMessage={error}
    />
  );
};

export default ExpirationDateInput;
