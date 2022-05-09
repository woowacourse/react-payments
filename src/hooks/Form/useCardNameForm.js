import { useContext } from 'react';
import { CardContext } from 'context/CardContext';
import { CARD_ACTION } from 'Reducer/CardReducer';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { useNavigate } from 'react-router-dom';

function useCardNameForm(link) {
  const navigator = useNavigate();
  const { inputtedInfo, cardDispatch, cardData, inputtedInfoDispatch } =
    useContext(CardContext);

  console.log(inputtedInfo, cardData);

  const { cardNumber, cardName } = inputtedInfo;

  const onCardNameSubmit = event => {
    event.preventDefault();

    console.log(event);

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

  return { onCardNameSubmit };
}

export default useCardNameForm;
