import React, { useRef } from 'react';
import { Input } from '../../../components';
import { CARD, ERROR_MESSAGE } from '../../../constants';
import { MMYYDateFormatter } from '../../../utils/formatter';
import { isValidDateFormat } from './../validator';

const ExpirationDateInput = ({ expirationDate, setInput }) => {
  const errorMessage = useRef();

  const onChange = (event) => {
    const inputValue = event.target.value.replace('/', '');

    try {
      if (isNaN(inputValue)) throw Error('숫자만 입력가능합니다.');

      const formattedDate = MMYYDateFormatter(inputValue);
      setInput('expirationDate', formattedDate);

      if (formattedDate.length === CARD.EXPIRATION_DATE_LENGTH) {
        if (isValidDateFormat(formattedDate)) {
          errorMessage.current = '';
          return;
        }

        errorMessage.current = ERROR_MESSAGE.INVALID_DATE_FORMAT;
      }
    } catch (error) {
      setInput('expirationDate', '');
      errorMessage.current = error.message;
    }
  };

  const onClick = () => {
    setInput('expirationDate', '');
    errorMessage.current = '';
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
      errorMessage={errorMessage.current}
    />
  );
};

export default ExpirationDateInput;
