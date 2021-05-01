import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Button } from '../../components/commons/button/Button';
import { Header } from '../../components/commons/header/Header';
import { CreditCard } from '../../components/commons/card/CreditCard';
import { ReactComponent as PrevIcon } from '../../assets/prevIcon.svg';
import CardNumberInput from '../../components/cardCreation/cardNumberInput/CardNumberInput';
import ExpiredDateInput from '../../components/cardCreation/expiredDateInput/ExpiredDateInput';
import CardOwnerInput from '../../components/cardCreation/cardOwnerInput/CardOwnerInput';
import SecurityCodeInput from '../../components/cardCreation/securityCodeInput/SecurityCodeInput';
import CardPasswordInput from '../../components/cardCreation/cardPasswordInput/CardPasswordInput';
import { isValidMonthInput, isValidMultipleInput, isValidYearInput } from '../../validator/cardCreationPage';
import Styled from './style';
import { COLOR } from '../../constants/color';
import { PAGE } from '../../constants/page';
import { INPUT_LENGTH, INPUT_NAME } from '../../constants/input';

const { FIRST, SECOND, THIRD, FOURTH, MONTH, YEAR } = INPUT_NAME;

const CardCreationPage = ({ setCurrentPage, setNewCardInfo, cardInfoForEdit }) => {
  const [cardNumber, setCardNumber] = useState({ [FIRST]: '', [SECOND]: '', [THIRD]: '', [FOURTH]: '' });
  const [cardExpiredDate, setCardExpiredDate] = useState({ [MONTH]: '', [YEAR]: '' });
  const [cardOwner, setCardOwner] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPassword] = useState({ [FIRST]: '', [SECOND]: '' });
  const [selectedCardInfo, setSelectedCardInfo] = useState({ id: null, name: '', color: COLOR.GRAY_100 });

  const isValidCardNumber = isValidMultipleInput(cardNumber, INPUT_LENGTH.CARD_NUMBER);
  const isValidCardExpiredDate = isValidMonthInput(cardExpiredDate) && isValidYearInput(cardExpiredDate);
  const isValidSecurityCode = securityCode.length === INPUT_LENGTH.SECURITY_CODE;
  const isValidCardPassword = isValidMultipleInput(cardPassword, INPUT_LENGTH.CARD_PASSWORD);

  const isValidAllInput = isValidCardNumber && isValidCardExpiredDate && isValidSecurityCode && isValidCardPassword;

  useEffect(() => {
    if (!cardInfoForEdit) return;

    setCardNumber(cardInfoForEdit.cardNumber);
    setCardExpiredDate(cardInfoForEdit.cardExpiredDate);
    setCardOwner(cardInfoForEdit.cardOwner);
    setSecurityCode(cardInfoForEdit.securityCode);
    setCardPassword(cardInfoForEdit.cardPassword);
    setSelectedCardInfo(cardInfoForEdit.selectedCardInfo);
  }, [cardInfoForEdit]);

  const handleNewCardSubmit = e => {
    e.preventDefault();

    setNewCardInfo(prevState => ({
      ...prevState,
      cardNumber,
      cardExpiredDate,
      cardOwner,
      securityCode,
      cardPassword,
      selectedCardInfo,
    }));
    setCurrentPage(PAGE.CARD_CREATION_COMPLETE);
  };

  return (
    <>
      <Header>
        <Button onClick={() => setCurrentPage(PAGE.CARD_LIST)} styles={{ marginRight: '18px', color: COLOR.GRAY_500 }}>
          <PrevIcon />
        </Button>
        <span>카드 추가</span>
      </Header>
      <div>
        <CreditCard
          backgroundColor={selectedCardInfo.color}
          content={{
            cardType: selectedCardInfo.name,
            cardNumber,
            cardOwner,
            cardExpiredDate,
          }}
        />
        <Styled.Form onSubmit={handleNewCardSubmit}>
          <CardNumberInput
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            isValidCardNumber={isValidCardNumber}
            setSelectedCardInfo={setSelectedCardInfo}
            selectedCardInfo={selectedCardInfo}
            isEditingMode={!!cardInfoForEdit}
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
            {isValidAllInput && <Button styles={{ color: COLOR.MINT_500 }}>다음</Button>}
          </Styled.ButtonContainer>
        </Styled.Form>
      </div>
    </>
  );
};

CardCreationPage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setNewCardInfo: PropTypes.func.isRequired,
  cardInfoForEdit: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};

export default CardCreationPage;
