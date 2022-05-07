import { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { CARD_ACTION } from '../Reducer/CardReducer';

function useCardNickNameForm(navigator, link) {
  const {
    inputtedInfo: { cardNumber, nickName },
    cardDispatch,
  } = useContext(CardContext);

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

    navigator(link);
  };

  return { isValidForm, onNickNameSubmit };
}

export default useCardNickNameForm;
