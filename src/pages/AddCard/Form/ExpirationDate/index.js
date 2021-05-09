import { useState } from 'react';
import { Input } from '../../../../components';
import { CARD, ERROR_MESSAGE } from '../../../../constants';
import ValidationError from '../../../../error/ValidationError';
import { MMYYDateFormatter } from '../../../../utils/formatter';
import { isValidDateFormat } from '../../../../utils/validator';

export default function ExpirationDate({ expirationDate, setExpirationDate }) {
  const [expirationDateErrorMessage, setExpirationDateErrorMessage] = useState('');

  return (
    <Input
      id="expiration-date"
      type="text"
      label="만료일"
      inputStyle={{ width: '7rem' }}
      placeholder="MM/YY"
      textAlign="center"
      maxLength="5"
      value={expirationDate}
      onChange={(event) => {
        const inputValue = event.target.value.replace('/', '');
        try {
          if (isNaN(inputValue)) throw new ValidationError('숫자만 입력가능합니다.');

          const formattedDate = MMYYDateFormatter(inputValue);
          setExpirationDate(formattedDate);

          if (formattedDate.length === CARD.EXPIRATION_DATE_LENGTH) {
            if (isValidDateFormat(formattedDate)) {
              setExpirationDateErrorMessage('');
              return;
            }

            setExpirationDateErrorMessage(ERROR_MESSAGE.INVALID_DATE_FORMAT);
          }
        } catch (error) {
          if (error instanceof ValidationError) {
            setExpirationDate('');
            setExpirationDateErrorMessage(error.message);
          }

          console.error(error.message);
        }
      }}
      onClick={() => {
        setExpirationDate('');
        if (expirationDateErrorMessage) {
          setExpirationDateErrorMessage('');
        }
      }}
      errorMessage={expirationDateErrorMessage}
    />
  );
}
