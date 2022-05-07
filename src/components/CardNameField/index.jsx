import PropTypes from 'prop-types';
import useErrorMessage from 'hooks/useErrorMessage';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

function CardNameField({ cardName, onChange }) {
  const { errorMessage, handleError } = useErrorMessage({
    state: cardName,
    validate: () => {},
  });

  return (
    <FieldSet title="카드 별칭" errorMessage={errorMessage}>
      <TextField
        name="cardName"
        value={cardName}
        placeholder="카드 별칭은 최대 30자까지 입력할 수 있습니다."
        maxLength={30}
        onChange={onChange}
        onBlur={handleError}
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
