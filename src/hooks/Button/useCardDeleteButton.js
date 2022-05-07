import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContext } from 'context/CardContext';
import { CARD_ACTION } from 'Reducer/CardReducer';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';

function useCardDeleteButton() {
  const navigator = useNavigate();

  const { inputtedInfo, inputtedInfoDispatch, cardDispatch } =
    useContext(CardContext);

  const onDeleteClick = () => {
    if (confirm('해당 카드를 삭제하시겠습니까?')) {
      inputtedInfoDispatch({
        type: INPUT_ACTION.CLEAR,
      });

      cardDispatch({
        type: CARD_ACTION.DELETE,
        value: inputtedInfo.cardNumber.value,
      });

      navigator('/react-payments/cardList');
    }
  };

  return { onDeleteClick };
}

export default useCardDeleteButton;
