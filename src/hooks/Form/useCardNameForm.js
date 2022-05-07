import { useContext } from 'react';
import { CardContext } from 'context/CardContext';
import { CARD_ACTION } from 'Reducer/CardReducer';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { useNavigate } from 'react-router-dom';
import { MESSAGE } from '../../constant/message';

function useCardNameForm(link) {
  const navigator = useNavigate();
  const { inputtedInfo, cardDispatch, inputtedInfoDispatch } =
    useContext(CardContext);

  const { cardNumber, cardName } = inputtedInfo;
  const isValidForm = cardName ? cardName.isValid : false;

  const onCardNameSubmit = event => {
    event.preventDefault();

    if (!isValidForm) {
      alert(MESSAGE.NO_CARD_NAME);
      return;
    }

    cardDispatch({
      type: CARD_ACTION.NAME_EDIT,
      value: cardName,
      targetCardNumber: cardNumber.value,
    });

    inputtedInfoDispatch({
      type: INPUT_ACTION.CLEAR,
    });

    navigator(link);
  };

  return { isValidForm, onCardNameSubmit };
}

export default useCardNameForm;
