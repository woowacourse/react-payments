import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '../../components/commons/button/Button';
import { Header } from '../../components/commons/header/Header';
import { CreditCard } from '../../components/commons/card/CreditCard';
import { ReactComponent as PrevIcon } from '../../assets/prevIcon.svg';
import CardNumberInput from '../../components/cardCreation/cardNumberInput/CardNumberInput';
import ExpiredDateInput from '../../components/cardCreation/expiredDateInput/ExpiredDateInput';
import CardOwnerInput from '../../components/cardCreation/cardOwnerInput/CardOwnerInput';
import SecurityCodeInput from '../../components/cardCreation/securityCodeInput/SecurityCodeInput';
import CardPasswordInput from '../../components/cardCreation/cardPasswordInput/CardPasswordInput';
import Styled from './style';
import { COLOR } from '../../constants/color';
import { PAGE } from '../../constants/page';
import { ALERT_MESSAGE } from '../../constants/message';
import {
  CARD_NUMBER_INPUT,
  CARD_OWNER_INPUT,
  CARD_PASSWORD_INPUT,
  EXPIRED_DATE_INPUT,
  SECURITY_CODE_INPUT,
} from '../../constants/input';
import { isFilledAllNumber } from '../../utils';

const isValidCardNumberInput = cardNumber => {
  return Object.values(cardNumber).every(cardNumber => isFilledAllNumber(cardNumber, CARD_NUMBER_INPUT.LENGTH));
};
const isValidMonthInput = cardExpiredDate => {
  const month = Number(cardExpiredDate.month);

  return (
    EXPIRED_DATE_INPUT.RANGE.MONTH.MIN <= month &&
    month <= EXPIRED_DATE_INPUT.RANGE.MONTH.MAX &&
    isFilledAllNumber(cardExpiredDate.month, EXPIRED_DATE_INPUT.LENGTH)
  );
};
const isValidYearInput = cardExpiredDate => {
  const year = Number(cardExpiredDate.year);

  return (
    EXPIRED_DATE_INPUT.RANGE.YEAR.MIN <= year && isFilledAllNumber(cardExpiredDate.year, EXPIRED_DATE_INPUT.LENGTH)
  );
};
const isValidCardOwnerInput = cardOwner => cardOwner.length <= CARD_OWNER_INPUT.LENGTH.MAX;
const isValidSecurityCodeInput = securityCode => isFilledAllNumber(securityCode, SECURITY_CODE_INPUT.LENGTH);
const isValidCardPasswordInput = cardPassword =>
  Object.values(cardPassword).every(cardPassword => isFilledAllNumber(cardPassword, CARD_PASSWORD_INPUT.LENGTH));

const CardCreationPage = ({ setCurrentPage, setNewCardInfo }) => {
  const [cardOwner, setCardOwner] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardNumber, setCardNumber] = useState({
    [CARD_NUMBER_INPUT.NAME.FIRST]: '',
    [CARD_NUMBER_INPUT.NAME.SECOND]: '',
    [CARD_NUMBER_INPUT.NAME.THIRD]: '',
    [CARD_NUMBER_INPUT.NAME.FOURTH]: '',
  });
  const [cardExpiredDate, setCardExpiredDate] = useState({
    [EXPIRED_DATE_INPUT.NAME.MONTH]: '',
    [EXPIRED_DATE_INPUT.NAME.YEAR]: '',
  });
  const [cardPassword, setCardPassword] = useState({
    [CARD_PASSWORD_INPUT.NAME.FIRST]: '',
    [CARD_PASSWORD_INPUT.NAME.SECOND]: '',
  });
  const [selectedCardInfo, setSelectedCardInfo] = useState({ id: null, name: '', color: COLOR.LIGHT_GRAY });

  const isSelectedCardInfo = !!selectedCardInfo.id;
  const isValidCardNumber = isValidCardNumberInput(cardNumber) && isSelectedCardInfo;
  const isValidCardExpiredDate = isValidMonthInput(cardExpiredDate) && isValidYearInput(cardExpiredDate);
  const isValidCardOwner = isValidCardOwnerInput(cardOwner);
  const isValidSecurityCode = isValidSecurityCodeInput(securityCode);
  const isValidCardPassword = isValidCardPasswordInput(cardPassword);

  const isValidAllInput =
    isValidCardNumber && isValidCardExpiredDate && isValidCardOwner && isValidSecurityCode && isValidCardPassword;

  const handleNewCardSubmit = e => {
    e.preventDefault();

    alert(ALERT_MESSAGE.SUCCECC_CARD_CREATE);

    setNewCardInfo({ cardNumber, cardExpiredDate, cardOwner, selectedCardInfo });
    setCurrentPage(PAGE.CARD_CREATION_COMPLETE);
  };

  return (
    <>
      <Header>
        <Button onClick={() => setCurrentPage(PAGE.CARD_LIST)} styles={{ marginRight: '18px' }}>
          <PrevIcon />
        </Button>
        <span>카드 추가</span>
      </Header>
      <div>
        <CreditCard
          backgroundColor={selectedCardInfo.color}
          content={{
            cardType: selectedCardInfo.name,
            cardNumber: Object.values(cardNumber),
            cardOwner,
            cardExpiredDate,
          }}
        />
        <Styled.Form onSubmit={handleNewCardSubmit}>
          <CardNumberInput
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            isValidCardNumber={isValidCardNumber}
            isSelectedCardInfo={isSelectedCardInfo}
            setSelectedCardInfo={setSelectedCardInfo}
          />
          <ExpiredDateInput
            cardExpiredDate={cardExpiredDate}
            setCardExpiredDate={setCardExpiredDate}
            isValidCardExpiredDate={isValidCardExpiredDate}
          />
          <CardOwnerInput //
            cardOwner={cardOwner}
            setCardOwner={setCardOwner}
          />
          <SecurityCodeInput
            securityCode={securityCode}
            setSecurityCode={setSecurityCode}
            isValidSecurityCode={isValidSecurityCode}
          />
          <CardPasswordInput
            cardPassword={cardPassword}
            setCardPassword={setCardPassword}
            isValidCardPassword={isValidCardPassword}
          />
          <Styled.ButtonContainer>
            {isValidAllInput && <Button styles={{ color: COLOR.MINT }}>다음</Button>}
          </Styled.ButtonContainer>
        </Styled.Form>
      </div>
    </>
  );
};

CardCreationPage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setNewCardInfo: PropTypes.func.isRequired,
};

export default CardCreationPage;
