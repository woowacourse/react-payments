import { useContext } from 'react';
import { MESSAGE } from '../constant/message';
import { CardContext } from '../context/CardContext';
import { CARD_ACTION } from '../Reducer/CardReducer';

function useCardAddForm(navigator, link) {
  const { inputtedInfo, cardData, cardDispatch } = useContext(CardContext);

  const isValidForm = Object.keys(inputtedInfo)
    .map(key => (key === 'nickName' ? true : inputtedInfo[key].isValid))
    .every(isValid => isValid);

  const checkExistCard = () => {
    const cardNumberList = cardData.map(cardInfo =>
      Object.values(cardInfo.cardNumber.value).join('')
    );

    return cardNumberList.find(
      cardNumber =>
        cardNumber === Object.values(inputtedInfo.cardNumber.value).join('')
    );
  };

  const saveNewCard = () => {
    if (checkExistCard()) {
      alert('이미 존재하는 카드입니다.');
      return;
    }

    cardDispatch({
      type: CARD_ACTION.ADD,
      value: { ...inputtedInfo, nickName: '이름 없음' },
    });
  };

  const onAddFormSubmit = event => {
    event.preventDefault();

    if (isValidForm) {
      saveNewCard();
      navigator(link);
      return;
    }

    alert(MESSAGE.DENY_SAVE);
  };

  return { isValidForm, onAddFormSubmit };
}

export default useCardAddForm;
