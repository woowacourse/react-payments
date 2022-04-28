import PropTypes from 'prop-types';
import { useState } from 'react';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { validateCardNumber } from 'validators';
import { CARD_NUMBER } from 'constants';

function CardNumberField({ cardNumber, onChange }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const onBlurCardNumber = () => {
    if (!cardNumber.every((unit) => unit !== '')) return;

    try {
      validateCardNumber(cardNumber);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <FieldSet title="카드 번호" errorMessage={errorMessage}>
      {Array.from({ length: CARD_NUMBER.UNIT_COUNT }).map((_, index) => (
        <TextField
          name="cardNumber"
          type={index < CARD_NUMBER.MASKING_INDEX ? 'text' : 'password'}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          value={cardNumber[index]}
          onChange={(event) => onChange(event, { index })}
          onBlur={onBlurCardNumber}
          maxLength={CARD_NUMBER.UNIT_LENGTH}
        />
      ))}
    </FieldSet>
  );
}

CardNumberField.defaultProps = {
  cardNumber: ['', '', '', ''],
};

CardNumberField.propTypes = {
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

export default CardNumberField;
