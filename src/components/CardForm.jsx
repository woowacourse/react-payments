import { useContext, useReducer } from 'react';

import { Button, CVCTooltip, Input } from 'components';

import { useCardPassword, useCVC, useNavigateTo } from 'hooks';

import { CardContext } from 'contexts/CardContext';

import styled from 'styled-components';

import { ERROR_MESSAGE, RULE } from 'constants';

import getMaskedNumbers from 'utils/maskNumbers';

function CardForm() {
  const { CVC, handleCVC, showCVCValidation } = useCVC('');
  const [firstPassword, handleFirstPassword] = useCardPassword('');
  const [secondPassword, handleSecondPassword] = useCardPassword('');
  const [isToolTipOpen, toggleToolTip] = useReducer(
    (visible) => !visible,
    false
  );
  const handleNavigate = useNavigateTo('/add-card-complete');

  const {
    cardNumber,
    handleCardNumber,
    showCardNumberValidation,
    cardOwnerName,
    handleCardOwnerName,
    showCardOwnerNameValidation,
    validDate,
    handleValidDate,
  } = useContext(CardContext);

  const requiredList = [
    cardNumber,
    validDate,
    CVC,
    firstPassword,
    secondPassword,
  ];

  return (
    <Styled.Root onSubmit={handleNavigate}>
      <div>
        <Input
          autoFocus
          data-testid="card-number"
          description="카드 번호"
          maxLength="19"
          pattern=".{17,19}"
          title={ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH}
          value={getMaskedNumbers(cardNumber, '')}
          onBlur={showCardNumberValidation}
          onChange={handleCardNumber}
          required
        />
      </div>
      <div>
        <Input
          data-testid="valid-date"
          description="만료일"
          pattern="(0[1-9]|1[0-2])\/\d{2}"
          placeholder="MM / YY"
          value={validDate}
          width="137px"
          title={ERROR_MESSAGE.INVALID_VALID_DATE}
          onChange={handleValidDate}
          required
        />
      </div>
      <div>
        <Styled.CardOwnerNameLength>
          {cardOwnerName.length}/{RULE.CARD_OWNER_NAME_MAX_LENGTH}
        </Styled.CardOwnerNameLength>
        <Input
          data-testid="card-owner-name"
          description="카드 소유자 이름 (선택)"
          maxLength="30"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={cardOwnerName}
          pattern="[a-zA-Z]+"
          title={ERROR_MESSAGE.INVALID_CARD_OWNER_NAME}
          onBlur={showCardOwnerNameValidation}
          onChange={handleCardOwnerName}
        />
      </div>
      <div>
        <Input
          data-testid="CVC"
          description="보안 코드(CVC/CVV)"
          minLength="2"
          title={ERROR_MESSAGE.INAVALID_CVC}
          type="password"
          width="84px"
          value={CVC}
          onBlur={showCVCValidation}
          onChange={handleCVC}
          required
        />
        <Button
          border="1px solid #BABABA"
          color="#969696"
          margin={{ l: '11px' }}
          shape="circle"
          size="small"
          onClick={toggleToolTip}
        >
          ?
        </Button>
        <CVCTooltip visible={isToolTipOpen} />
      </div>
      <div>
        <Input
          data-testid="first-card-password"
          description="카드 비밀번호"
          margin={{ r: '7px' }}
          type="password"
          width="43px"
          value={firstPassword}
          onChange={handleFirstPassword}
          required
        />
        <Input
          data-testid="second-card-password"
          margin={{ r: '26px' }}
          type="password"
          width="43px"
          value={secondPassword}
          onChange={handleSecondPassword}
          required
        />
        <Styled.Bullet>•</Styled.Bullet>
        <Styled.Bullet>•</Styled.Bullet>
      </div>
      {requiredList.every((value) => value !== '') && (
        <Styled.NextButton color="#04C09E" fontWeight="bold" type="submit">
          다음
        </Styled.NextButton>
      )}
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 19px;
  `,

  CardOwnerNameLength: styled.div`
    color: #525252;
    font-size: 12px;
    float: right;
  `,

  Bullet: styled.span`
    color: #04c09e;
    margin-right: 35px;
  `,

  NextButton: styled(Button)`
    align-self: end;
  `,
};

export default CardForm;
