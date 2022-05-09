import { useContext } from 'react';
import { MESSAGE } from 'constant/message';
import { CardContext } from 'context/CardContext';
import { CARD_ACTION } from 'Reducer/CardReducer';
import { useNavigate } from 'react-router-dom';
import { NO_CARD_NAME } from '../../constant';

function useCardAddForm(link) {
  const navigator = useNavigate();
  const { inputtedInfo, cardData, cardDispatch } = useContext(CardContext);

  const isValidForm = Object.keys(inputtedInfo).every(
    key => inputtedInfo[key].isValid
  );

  const onCardInfoSubmit = event => {
    event.preventDefault();

    if (isValidForm) {
      saveNewCard();
      return;
    }

    alert(MESSAGE.DENY_SAVE);
  };

  const saveNewCard = () => {
    if (checkExistCard()) {
      alert(MESSAGE.ALREADY_EXIST);
      return;
    }

    cardDispatch({
      type: CARD_ACTION.ADD,
      value: { ...inputtedInfo, cardName: { value: NO_CARD_NAME } },
    });

    navigator(link);
  };

  const checkExistCard = () => {
    const cardNumberList = cardData.map(cardInfo =>
      Object.values(cardInfo.cardNumber.value).join('')
    );

    const inputtedCardNumber = Object.values(
      inputtedInfo.cardNumber.value
    ).join('');

    return cardNumberList.includes(inputtedCardNumber);
  };

  return { isValidForm, onCardInfoSubmit };
}

export default useCardAddForm;
