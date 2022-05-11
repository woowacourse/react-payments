import PropTypes from 'prop-types';
import useErrorMessage from 'hooks/useErrorMessage';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { CARD_NUMBER } from 'constants';
import { validateCardNumber } from 'validators';

function CardNumberField({ cardNumber, onChange }) {
  const { errorMessage, handleError } = useErrorMessage({
    state: cardNumber,
    validate: validateCardNumber,
  });

  return (
    <FieldSet
      title="카드 번호"
      nextFocusLength={CARD_NUMBER.UNIT_LENGTH}
      errorMessage={errorMessage}
    >
      {Array.from({ length: CARD_NUMBER.UNIT_COUNT }).map((_, index) => (
        <TextField
          type={index < CARD_NUMBER.MASKING_INDEX ? 'number' : 'password'}
          name="cardNumber"
          // index 값이 변경될 일이 없으므로 index로 key 값 지정.
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          value={cardNumber[index]}
          maxLength={CARD_NUMBER.UNIT_LENGTH}
          onChange={(event) => onChange(event, { index })}
          onBlur={(event) => handleError(event, !cardNumber.every((unit) => unit !== ''))}
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
