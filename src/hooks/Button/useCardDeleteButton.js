import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContext } from 'context/CardContext';
import { CARD_ACTION } from 'Reducer/CardReducer';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { MESSAGE } from '../../constant/message';
import { LINK } from '../../constant/Link';

function useCardDeleteButton() {
  const navigator = useNavigate();

  const { inputtedInfo, inputtedInfoDispatch, cardDispatch } =
    useContext(CardContext);

  const onDeleteClick = () => {
    if (confirm(MESSAGE.CARD_DELETE)) {
      inputtedInfoDispatch({
        type: INPUT_ACTION.CLEAR,
      });

      cardDispatch({
        type: CARD_ACTION.DELETE,
        value: inputtedInfo.cardNumber.value,
      });

      navigator(LINK.CARD_LIST_PAGE);
    }
  };

  return { onDeleteClick };
}

export default useCardDeleteButton;
