import PropTypes from 'prop-types';

import { LIMIT_LENGTH } from 'constants';
import { limitInputLength, inputEnglishOnly } from 'utils';

function CardOwner({ cardInfo, setCardInfo }) {
  const handleChange = (event) => {
    const { value, name } = event.target;

    const cardOwnerEnglishOnly = inputEnglishOnly(value);

    const cardOwnerLengthSliced =
      cardOwnerEnglishOnly.length > LIMIT_LENGTH.CARD_OWNER
        ? limitInputLength(cardOwnerEnglishOnly, LIMIT_LENGTH.CARD_OWNER)
        : cardOwnerEnglishOnly;

    setCardInfo({
      ...cardInfo,
      [name]: cardOwnerLengthSliced.toUpperCase(),
    });
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <span className="input-title">카드 소유자 영문 이름(선택)</span>
        <span className="input-length">
          {cardInfo.owner.length <= 30 ? cardInfo.owner.length : 30}/30
        </span>
      </div>
      <input
        name="owner"
        type="text"
        className={`input-basic ${cardInfo.owner.length >= 1 ? 'input-correct' : null}`}
        onChange={handleChange}
        value={cardInfo.owner}
      />
    </div>
  );
}

export default CardOwner;

CardOwner.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  setCardInfo: PropTypes.func.isRequired,
};
