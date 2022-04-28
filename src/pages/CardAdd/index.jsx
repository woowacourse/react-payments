import useCardState from 'hooks/useCardState';

import Header from 'components/@common/Header';
import Button from 'components/@common/Button';

import Card from 'components/Card';
import CardNumberField from 'components/CardNumberField';
import CardExpireDateField from 'components/CardExpireDateField';
import CardUserNameField from 'components/CardUserNameField';
import CardSecurityField from 'components/CardSecurityField';
import CardPasswordField from 'components/CardPasswordField';

import { ACTION_TYPE } from 'constants';
import {
  validateCardPassword,
  validateExpireDate,
  validateSecurityCode,
  validateUserName,
} from 'validators';

function CardAdd() {
  const [state, dispatch] = useCardState();
  const { cardNumber, expireMonth, expireYear, userName, securityCode, cardPassword } = state;
  const { isComplete } = state;

  const onChangeTextField = ({ target }) => {
    const textField = target.name;

    const dispatchAction = {
      cardNumber: () => ({
        type: ACTION_TYPE.UPDATE_CARD_NUMBER,
        contents: target.value,
      }),
      expireMonth: () => ({
        type: ACTION_TYPE.UPDATE_EXPIRE_MONTH,
        contents: target.value,
      }),
      expireYear: () => ({
        type: ACTION_TYPE.UPDATE_EXPIRE_YEAR,
        contents: target.value,
      }),
      userName: () => ({
        type: ACTION_TYPE.UPDATE_USER_NAME,
        contents: target.value,
      }),
      securityCode: () => ({
        type: ACTION_TYPE.UPDATE_SECURITY_CODE,
        contents: target.value,
      }),
      cardPassword: () => ({
        type: ACTION_TYPE.UPDATE_CARD_PASSWORD,
        contents: target.value,
      }),
    };

    dispatch(dispatchAction[textField]());
  };

  const onClickConfirmButton = () => {
    try {
      validateCardPassword(cardPassword);
      validateExpireDate(expireMonth, expireYear);
      validateSecurityCode(securityCode);
      // eslint-disable-next-line no-unused-expressions
      userName && validateUserName(userName);

      alert(`
        리뷰어님 체크용 ✅
        카드번호: ${cardNumber}
        만료일: ${expireMonth} / ${expireYear}
        소유자: ${userName}
        보안 코드: ${securityCode}
        비밀 번호: ${cardPassword}
      `);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header>카드 추가</Header>
      <Card
        companyName="티거 카드"
        cardNumber={cardNumber}
        userName={userName}
        expireMonth={expireMonth}
        expireYear={expireYear}
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
