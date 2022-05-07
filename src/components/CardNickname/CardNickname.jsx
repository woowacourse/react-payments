import { useContext } from 'react';
import { CardInfoContext } from 'App';

import { LIMIT_LENGTH } from 'constants';
import { limitInputLength } from 'utils';

function CardNickname() {
  const { state, dispatch } = useContext(CardInfoContext);

  const handleChange = (event) => {
    const { value } = event.target;

    const newNickname =
      value.length > LIMIT_LENGTH.NICKNAME ? limitInputLength(value, LIMIT_LENGTH.NICKNAME) : value;

    dispatch({ type: 'SET_CARD_NICKNAME', newNickname });
  };

  return (
    <>
      <input
        className="line-input"
        type="text"
        placeholder="카드 별명을 입력해주세요."
        onChange={handleChange}
        value={state.nickname}
        required
      />
    </>
  );
}

export default CardNickname;
