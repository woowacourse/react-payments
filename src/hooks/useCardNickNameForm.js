import { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { CARD_ACTION } from '../Reducer/CardReducer';
import { INPUT_ACTION } from '../Reducer/InputtedInfoReducer';

function useCardNickNameForm(navigator, link) {
  const { inputtedInfo, cardDispatch, inputtedInfoDispatch } =
    useContext(CardContext);

  const { cardNumber, nickName } = inputtedInfo;
  const isValidForm = nickName ? nickName.isValid : false;

  const onNickNameSubmit = event => {
    event.preventDefault();

    if (!isValidForm) {
      alert('카드 이름을 입력해주세요.');
      return;
    }

    cardDispatch({
      type: CARD_ACTION.NAME_EDIT,
      value: nickName,
      targetCardNumber: cardNumber.value,
    });

    inputtedInfoDispatch({
      type: INPUT_ACTION.CLEAR,
    });

    navigator(link);
  };

  return { isValidForm, onNickNameSubmit };
}

export default useCardNickNameForm;
