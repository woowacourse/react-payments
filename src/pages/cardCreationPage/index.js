import { useContext } from 'react';
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
import { INPUT_LENGTH } from '../../constants/input';
import CardDataContext from '../../context/CardDataContext';

const CardCreationPage = () => {
  const {
    cardInfo: { cardNumber, cardExpiredDate, securityCode, cardPassword, cardOwner, selectedCardInfo },
    setCurrentPage,
  } = useContext(CardDataContext);

  const isValidCardNumber = isValidMultipleInput(cardNumber, INPUT_LENGTH.CARD_NUMBER);
  const isValidCardExpiredDate = isValidMonthInput(cardExpiredDate) && isValidYearInput(cardExpiredDate);
  const isValidSecurityCode = securityCode.length === INPUT_LENGTH.SECURITY_CODE;
  const isValidCardPassword = isValidMultipleInput(cardPassword, INPUT_LENGTH.CARD_PASSWORD);

  const isValidAllInput = isValidCardNumber && isValidCardExpiredDate && isValidSecurityCode && isValidCardPassword;

  const handleNewCardSubmit = e => {
    e.preventDefault();

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
            isValidCardNumber={isValidCardNumber}
            selectedCardInfo={selectedCardInfo}
          />
          <ExpiredDateInput cardExpiredDate={cardExpiredDate} isValidCardExpiredDate={isValidCardExpiredDate} />
          <CardOwnerInput //
            cardOwner={cardOwner}
          />
          <SecurityCodeInput securityCode={securityCode} isValidSecurityCode={isValidSecurityCode} />
          <CardPasswordInput cardPassword={cardPassword} isValidCardPassword={isValidCardPassword} />
          <Styled.ButtonContainer>
            {isValidAllInput && <Button styles={{ color: COLOR.MINT_500 }}>다음</Button>}
          </Styled.ButtonContainer>
        </Styled.Form>
      </div>
    </>
  );
};

export default CardCreationPage;
