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

function CardAdd() {
  const { state, onChangeTextField } = useCardState();
  const { cardNumber, expireMonth, expireYear, userName, securityCode, cardPassword } = state;
  const { isComplete } = state;

  const onClickConfirmButton = () => {
    try {
      validateCardNumber(cardNumber);
      validateCardPassword(cardPassword);
      validateExpireDate({ expireMonth, expireYear });
      validateSecurityCode(securityCode);
      userName && validateUserName(userName);

      alert(`
        리뷰어님 체크용 ✅
        카드번호: ${cardNumber.join('-')}
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
