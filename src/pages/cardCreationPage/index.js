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
import { FIRST, SECOND, THIRD, FOURTH, MONTH, YEAR } from '../../constants/inputName';

const CardCreationPage = ({ setCurrentPage, setNewCardInfo }) => {
  const [cardNumber, setCardNumber] = useState({ [FIRST]: '', [SECOND]: '', [THIRD]: '', [FOURTH]: '' });
  const [cardExpiredDate, setCardExpiredDate] = useState({ [MONTH]: '', [YEAR]: '' });
  const [cardOwner, setCardOwner] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPassword] = useState({ [FIRST]: '', [SECOND]: '' });
  const [selectedCardInfo, setSelectedCardInfo] = useState({ id: null, name: '', color: COLOR.LIGHT_GRAY });

  const [isValidCardNumber, setValidCardNumber] = useState(false);
  const [isValidCardExpiredDate, setValidCardExpiredDate] = useState(false);
  const [isValidCardOwner, setValidCardOwner] = useState(false);
  const [isValidSecurityCode, setValidSecurityCode] = useState(false);
  const [isValidCardPassword, setValidCardPassword] = useState(false);

  const isValidAllInput =
    isValidCardNumber && isValidCardExpiredDate && isValidCardOwner && isValidSecurityCode && isValidCardPassword;

  const handleNewCardSubmit = e => {
    e.preventDefault();

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
            setValidCardNumber={setValidCardNumber}
            setSelectedCardInfo={setSelectedCardInfo}
            selectedCardInfo={selectedCardInfo}
          />
          <ExpiredDateInput
            cardExpiredDate={cardExpiredDate}
            setCardExpiredDate={setCardExpiredDate}
            isValidCardExpiredDate={isValidCardExpiredDate}
            setValidCardExpiredDate={setValidCardExpiredDate}
          />
          <CardOwnerInput //
            cardOwner={cardOwner}
            setCardOwner={setCardOwner}
            setValidCardOwner={setValidCardOwner}
          />
          <SecurityCodeInput
            securityCode={securityCode}
            setSecurityCode={setSecurityCode}
            isValidSecurityCode={isValidSecurityCode}
            setValidSecurityCode={setValidSecurityCode}
          />
          <CardPasswordInput
            cardPassword={cardPassword}
            setCardPassword={setCardPassword}
            isValidCardPassword={isValidCardPassword}
            setValidCardPassword={setValidCardPassword}
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
