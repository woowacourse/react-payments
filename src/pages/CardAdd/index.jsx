import { postCard } from 'apis';

import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useCardState from 'hooks/useCardState';
import CardContext from 'contexts';

import { Button, Header } from 'components/@common';

import {
  Card,
  CardNumberField,
  CardExpireDateField,
  CardUserNameField,
  CardSecurityField,
  CardPasswordField,
} from 'components';

import {
  validateCardNumber,
  validateCardPassword,
  validateExpireDate,
  validateSecurityCode,
  validateUserName,
} from 'validators';

import { CARD_NUMBER, PATH } from 'constants';

function CardAdd({ setCard }) {
  const [state, dispatch] = useCardState();
  const { isComplete, cardNumber, expireMonth, expireYear, userName, securityCode, cardPassword } =
    state;

  const navigate = useNavigate();

  const onClickPreviousButton = () => {
    navigate(PATH.CARD_LIST);
  };

  const onChangeTextField = useCallback(
    ({ target }, option = {}) => {
      const textFieldName = target.name;

      switch (textFieldName) {
        case CARD_NUMBER.TEXT_FIELD_NAME:
          dispatch({
            type: textFieldName,
            contents: { index: option.index, value: target.value },
          });
          break;

        default:
          dispatch({
            type: textFieldName,
            contents: target.value,
          });
      }
    },
    [dispatch],
  );

  const onClickNextButton = async () => {
    try {
      validateCardNumber(cardNumber);
      validateCardPassword(cardPassword);
      validateExpireDate({ expireMonth, expireYear });
      validateSecurityCode(securityCode);
      userName && validateUserName(userName);

      setCard(state);
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
        userName={userName}
        expireMonth={expireMonth}
        expireYear={expireYear}
      />
      <CardContext.Provider
        value={useMemo(() => ({ ...state, onChangeTextField }), [state, onChangeTextField])}
      >
        <CardNumberField />
        <CardExpireDateField />
        <CardUserNameField />
        <CardSecurityField />
        <CardPasswordField />
      </CardContext.Provider>
      <div className="button-container right">
        <Button isDisabled={!isComplete} onClick={onClickNextButton}>
          다음
        </Button>
      </div>
    </>
  );
}

export default CardAdd;
