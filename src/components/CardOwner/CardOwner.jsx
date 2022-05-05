import PropTypes from 'prop-types';

import { LIMIT_LENGTH } from 'constants';
import { limitInputLength, inputEnglishOnly } from 'utils';

function CardOwner({ cardOwner, setOwner }) {
  const handleChange = (event) => {
    const { value } = event.target;

    const cardOwnerEnglishOnly = inputEnglishOnly(value);

    const cardOwnerLengthSliced =
      cardOwnerEnglishOnly.length > LIMIT_LENGTH.CARD_OWNER
        ? limitInputLength(cardOwnerEnglishOnly, LIMIT_LENGTH.CARD_OWNER)
        : cardOwnerEnglishOnly;

    const newCardOwner = cardOwnerLengthSliced.toUpperCase();

    setOwner(newCardOwner);
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <span className="input-title">카드 소유자 영문 이름(선택)</span>
        <span className="input-length">{cardOwner.length <= 30 ? cardOwner.length : 30}/30</span>
      </div>
      <input
        type="text"
        className={`input-basic ${cardOwner.length >= 1 ? 'input-correct' : ''}`}
        onChange={handleChange}
        value={cardOwner}
      />
    </div>
  );
}

export default CardOwner;

CardOwner.propTypes = {
  cardOwner: PropTypes.string.isRequired,
  setOwner: PropTypes.func.isRequired,
};
