import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
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
import { COLOR, INPUT } from '../../constants';
import { CardValidator } from '../../validations/card';
import { Link, withRouter } from 'react-router-dom';

const handleBeforeUnload = e => {
  e.preventDefault();
  e.returnValue = '';
};

const CardCreationPage = ({ history, setNewCardInfo }) => {
  const [cardNumber, setCardNumber] = useState({
    [INPUT.FIRST]: '',
    [INPUT.SECOND]: '',
    [INPUT.THIRD]: '',
    [INPUT.FOURTH]: '',
  });
  const [cardExpiredDate, setCardExpiredDate] = useState({ [INPUT.MONTH]: '', [INPUT.YEAR]: '' });
  const [cardOwner, setCardOwner] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPassword] = useState({ [INPUT.FIRST]: '', [INPUT.SECOND]: '' });
  const [selectedCardInfo, setSelectedCardInfo] = useState({ id: null, name: '', color: COLOR.LIGHT_GRAY });
  const isValidAllInput =
    CardValidator.Number(cardNumber) &&
    CardValidator.ExpiredDate(cardExpiredDate) &&
    CardValidator.Owner(cardOwner) &&
    CardValidator.SecurityCode(securityCode) &&
    CardValidator.Password(cardPassword);

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  });

  const handleNewCardSubmit = e => {
    e.preventDefault();

    setNewCardInfo({ cardNumber, cardExpiredDate, cardOwner, selectedCardInfo });
    history.push('/complete');
  };

  return (
    <>
      <Header>
        <Link to="/">
          <Button styles={{ marginRight: '18px' }}>
            <PrevIcon />
          </Button>
        </Link>
        <span>카드 추가</span>
      </Header>
      <div>
        <CreditCard
          backgroundColor={selectedCardInfo.color}
          cardType={selectedCardInfo.name}
          cardNumber={Object.values(cardNumber)}
          cardOwner={cardOwner}
          cardExpiredDate={cardExpiredDate}
        />
        <Styled.Form onSubmit={handleNewCardSubmit}>
          <CardNumberInput
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            setSelectedCardInfo={setSelectedCardInfo}
            selectedCardInfo={selectedCardInfo}
          />
          <ExpiredDateInput cardExpiredDate={cardExpiredDate} setCardExpiredDate={setCardExpiredDate} />
          <CardOwnerInput cardOwner={cardOwner} setCardOwner={setCardOwner} />
          <SecurityCodeInput securityCode={securityCode} setSecurityCode={setSecurityCode} />
          <CardPasswordInput cardPassword={cardPassword} setCardPassword={setCardPassword} />
          <Styled.ButtonContainer>
            {isValidAllInput && <Button styles={{ color: COLOR.MINT }}>다음</Button>}
          </Styled.ButtonContainer>
        </Styled.Form>
      </div>
    </>
  );
};

CardCreationPage.propTypes = {
  setNewCardInfo: PropTypes.func.isRequired,
};

export default withRouter(CardCreationPage);
