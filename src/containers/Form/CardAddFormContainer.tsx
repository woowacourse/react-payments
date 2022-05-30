import { FormEventHandler, useContext } from 'react';
import { To, useNavigate } from 'react-router';
import CardAddForm from 'components/Templates/CardAddForm';
import { CardContext, CardContextValue } from 'context/CardContext';
import { MESSAGE } from 'constant/message';
import { CARD_ACTION } from 'Reducer/CardReducer';
import CardNumberInputContainer from 'containers/Input/CardNumberInputContainer';
import ExpiredDateInputContainer from 'containers/Input/ExpiredDateInputContainer';
import CardOwnerInputContainer from 'containers/Input/CardOwnerInputContainer';
import SecurityNumberInputContainer from 'containers/Input/SecurityNumberInputContainer';
import PasswordInputContainer from 'containers/Input/PasswordInputContainer';

function CardAddFormContainer({ link }: { link: To }) {
  const navigator = useNavigate();
  const { inputtedInfo, cardData, cardDispatch } = useContext(CardContext) as CardContextValue;

  const isValidForm = Object.keys(inputtedInfo).every(
    key => inputtedInfo[key as keyof typeof inputtedInfo].isValid
  );

  const onCardInfoSubmit: FormEventHandler = event => {
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
      value: inputtedInfo,
    });

    navigator(link);
  };

  const checkExistCard = () => {
    const cardNumberList = cardData.map(cardInfo => {
      return Object.values(cardInfo.cardNumber.value!).join('');
    });

    const inputtedCardNumber = Object.values(inputtedInfo.cardNumber.value ?? []).join('');

    return cardNumberList.includes(inputtedCardNumber);
  };

  return (
    <CardAddForm isValidForm={isValidForm} onCardInfoSubmit={onCardInfoSubmit}>
      <CardNumberInputContainer />
      <ExpiredDateInputContainer />
      <CardOwnerInputContainer />
      <SecurityNumberInputContainer />
      <PasswordInputContainer />
    </CardAddForm>
  );
}

export default CardAddFormContainer;
