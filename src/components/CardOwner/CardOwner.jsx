import { useContext } from 'react';
import { CardInfoContext } from 'App';

import { LIMIT_LENGTH } from 'constants';
import { limitInputLength, inputEnglishOnly } from 'utils';

function CardOwner() {
  const { state, dispatch } = useContext(CardInfoContext);

  const { owner } = state.inputs;

  const setCardOwner = (owner) => dispatch({ type: 'SET_CARD_OWNER', owner });

  const handleChange = (event) => {
    const { value } = event.target;

    const cardOwnerEnglishOnly = inputEnglishOnly(value);

    const cardOwnerLengthSliced =
      cardOwnerEnglishOnly.length > LIMIT_LENGTH.CARD_OWNER
        ? limitInputLength(cardOwnerEnglishOnly, LIMIT_LENGTH.CARD_OWNER)
        : cardOwnerEnglishOnly;

    const newCardOwner = cardOwnerLengthSliced.toUpperCase();
    setCardOwner(newCardOwner);
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <span className="input-title">카드 소유자 영문 이름(선택)</span>
        <span className="input-length">{owner?.length <= 30 ? owner?.length : 30}/30</span>
      </div>
      <input
        type="text"
        className={`input-basic ${owner?.length >= 1 ? 'input-correct' : ''}`}
        onChange={handleChange}
        value={owner}
      />
    </div>
  );
}

export default CardOwner;
