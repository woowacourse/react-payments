import { useNavigate } from 'react-router-dom';
import useCardState from 'hooks/useCardState';

import Header from 'components/@common/Header';
import Button from 'components/@common/Button';

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

  const onChangeTextField = ({ target }, option = {}) => {
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
  };

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
      <Card
        companyName="티거 카드 🐯"
        cardNumber={cardNumber}
        userName={userName}
        expireMonth={expireMonth}
        expireYear={expireYear}
        isComplete={isComplete}
      />
      <CardNumberField cardNumber={cardNumber} onChange={onChangeTextField} />
      <CardExpireDateField
        expireMonth={expireMonth}
        expireYear={expireYear}
        onChange={onChangeTextField}
      />
      <CardUserNameField userName={userName} onChange={onChangeTextField} />
      <CardSecurityField securityCode={securityCode} onChange={onChangeTextField} />
      <CardPasswordField cardPassword={cardPassword} onChange={onChangeTextField} />

      <div className="button-container right">
        <Button isDisabled={!isComplete} onClick={onClickConfirmButton}>
          다음
        </Button>
      </div>
    </>
  );
}

export default CardAdd;
