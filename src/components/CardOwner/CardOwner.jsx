import PropTypes from 'prop-types';

import { LIMIT_LENGTH } from 'constants';
import { limitInputLength, inputEnglishOnly } from 'utils';

function CardOwner({ cardInfo, setCardInfo }) {
  const handleChange = (event) => {
    let { value, name } = event.target;
    value = inputEnglishOnly(value);

    if (value.length > LIMIT_LENGTH.CARD_OWNER) {
      value = limitInputLength(value, LIMIT_LENGTH.CARD_OWNER);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });

    if (value.length >= 1) {
      event.target.classList.add('input-correct');
      return;
    }
    event.target.classList.remove('input-correct');
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
        className="input-basic"
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
