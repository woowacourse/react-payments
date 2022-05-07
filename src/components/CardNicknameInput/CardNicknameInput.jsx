import { CardInfoContext } from 'App';
import { useContext } from 'react';
import LineInput from 'components/common/LineInput/LineInput';

function CardNicknameInput() {
  const { state, dispatch } = useContext(CardInfoContext);

  const handleChange = (event) => {
    const newNickname = event.target.value;

    dispatch({ type: 'SET_CARD_NICKNAME', newNickname });
  };

  return (
    <LineInput
      inputMessage="카드 별명을 입력해주세요."
      onChange={handleChange}
      value={state.nickname}
    />
  );
}

export default CardNicknameInput;
