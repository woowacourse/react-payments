import PropTypes from 'prop-types';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { CARD_NUMBER } from 'constants';

function CardNumberField({ cardNumber, onChange }) {
  return (
    <FieldSet title="카드 번호">
      <TextField
        name="cardNumber"
        value={cardNumber}
        onChange={onChange}
        maxLength={CARD_NUMBER.MAX_LENGTH}
      />
    </FieldSet>
  );
}

CardNumberField.defaultProps = {
  cardNumber: '',
};

CardNumberField.propTypes = {
  cardNumber: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CardNumberField;
