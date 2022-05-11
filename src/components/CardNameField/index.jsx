import PropTypes from 'prop-types';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

function CardNameField({ cardName, onChange }) {
  return (
    <FieldSet title="카드 별칭">
      <TextField
        name="cardName"
        value={cardName}
        placeholder="카드 별칭은 최대 30자까지 입력할 수 있습니다."
        maxLength={30}
        onChange={onChange}
      />
    </FieldSet>
  );
}

CardNameField.defaultProps = {
  cardName: '',
};

CardNameField.propTypes = {
  cardName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CardNameField;
