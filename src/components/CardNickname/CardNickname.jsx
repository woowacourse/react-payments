import { useContext } from 'react';
import { CardInfoContext } from 'App';

import { LIMIT_LENGTH, ACTION } from 'constants';
import { limitInputLength } from 'utils';

function CardNickname() {
  const { state, dispatch } = useContext(CardInfoContext);

  const { nickname } = state.card;

  const handleChange = (event) => {
    const { value } = event.target;

    const newNickname =
      value.length > LIMIT_LENGTH.NICKNAME ? limitInputLength(value, LIMIT_LENGTH.NICKNAME) : value;

    dispatch({ type: ACTION.SET_CARD_NICKNAME, newNickname });
  };

  return (
    <>
      <div className="input-container">
        <span className="input-nickname-length">
          {nickname.length <= 10 ? nickname.length : 10}/10
        </span>
        <input
          id="nickname"
          className="line-input"
          type="text"
          placeholder="카드 별명을 입력해주세요."
          onChange={handleChange}
          value={nickname}
          required
        />
      </div>
    </>
  );
}

export default CardNickname;
