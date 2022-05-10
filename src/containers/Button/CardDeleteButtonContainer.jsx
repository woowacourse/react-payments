import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CardDeleteButton from 'components/Atoms/CardDeleteButton';
import { CardContext } from 'context/CardContext';
import { MESSAGE } from 'constant/message';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { CARD_ACTION } from 'Reducer/CardReducer';
import { LINK } from 'constant/Link';

function CardDeleteButtonContainer() {
  const navigator = useNavigate();
  const { inputtedInfo, inputtedInfoDispatch, cardDispatch } = useContext(CardContext);

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

  return <CardDeleteButton onDeleteClick={onDeleteClick}>카드삭제</CardDeleteButton>;
}

export default CardDeleteButtonContainer;
