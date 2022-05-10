import { useContext } from 'react';
import { useNavigate } from 'react-router';
import CardNameForm from 'components/Templates/CardNameForm';
import { CardContext } from 'context/CardContext';
import { CARD_ACTION } from 'Reducer/CardReducer';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import CardNameInputContainer from 'containers/Input/CardNameInputContainer';

function CardNameFormContainer({ link }) {
  const navigator = useNavigate();
  const { inputtedInfo, cardDispatch, inputtedInfoDispatch } = useContext(CardContext);

  const { cardNumber, cardName } = inputtedInfo;

  const onCardNameSubmit = event => {
    event.preventDefault();

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

  return (
    <CardNameForm onCardNameSubmit={onCardNameSubmit}>
      <CardNameInputContainer />
    </CardNameForm>
  );
}

export default CardNameFormContainer;
