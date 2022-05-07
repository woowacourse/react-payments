import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useCardState from 'hooks/useCardState';
import CardContext from 'contexts';

import { Header, Button } from 'components/@common';

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

function CardAdd() {
  const [state, dispatch] = useCardState();
  const { cardNumber, expireMonth, expireYear, userName, securityCode, cardPassword } = state;
  const { isComplete } = state;

  const navigate = useNavigate();

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

  const onClickConfirmButton = () => {
    try {
      validateCardNumber(cardNumber);
      validateCardPassword(cardPassword);
      validateExpireDate({ expireMonth, expireYear });
      validateSecurityCode(securityCode);
      userName && validateUserName(userName);

      navigate(PATH.CARD_ADD_COMPLETE);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header>카드 추가</Header>
      <CardContext.Provider
        value={useMemo(() => ({ ...state, onChangeTextField }), [state, onChangeTextField])}
      >
        <Card />
        <CardNumberField />
        <CardExpireDateField />
        <CardUserNameField />
        <CardSecurityField />
        <CardPasswordField />
      </CardContext.Provider>
      <div className="button-container right">
        <Button isDisabled={!isComplete} onClick={onClickConfirmButton}>
          다음
        </Button>
      </div>
    </>
  );
}

export default CardAdd;
