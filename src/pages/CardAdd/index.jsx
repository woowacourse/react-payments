import { postCard } from 'apis';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContext } from 'contexts';

import { Button, Header } from 'components/@common';

import {
  Card,
  CardNumberField,
  CardExpireDateField,
  CardUserNameField,
  CardSecurityField,
  CardPasswordField,
} from 'components';

import { PATH } from 'constants';
import { validateCard } from 'validators';

function CardAdd() {
  const { isComplete, cardNumber, expireMonth, expireYear, userName, securityCode, cardPassword } =
    useContext(CardContext);

  const navigate = useNavigate();

  const onClickPreviousButton = () => {
    navigate(PATH.CARD_LIST);
  };

  const onClickNextButton = async () => {
    const state = { cardNumber, expireMonth, expireYear, userName, securityCode, cardPassword };

    try {
      validateCard(state);
      await postCard(state);

      navigate(PATH.CARD_ADD_COMPLETE);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="header">
        <Button className="previous-button" onClick={onClickPreviousButton}>
          &lt;
        </Button>
        <Header>카드 추가</Header>
      </div>
      <Card
        cardNumber={cardNumber}
        expireMonth={expireMonth}
        expireYear={expireYear}
        userName={userName}
      />
      <CardNumberField />
      <CardExpireDateField />
      <CardUserNameField />
      <CardSecurityField />
      <CardPasswordField />
      <div className="button-container right">
        <Button isDisabled={!isComplete} onClick={onClickNextButton}>
          다음
        </Button>
      </div>
    </>
  );
}

export default CardAdd;
