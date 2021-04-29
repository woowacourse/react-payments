import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
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
import { CARD_NUMBER_INPUT, CARD_PASSWORD_INPUT, EXPIRED_DATE_INPUT } from '../../constants/input';

const cardListRef = firestore.collection('cardList');

const CardCreationPage = ({ targetCardId, setCurrentPage, setNewCardInfo, setTargetCardId }) => {
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

<<<<<<< HEAD
  const isSelectedCardInfo = !!selectedCardInfo.id;
  const isValidCardNumber = isValidCardNumberInput(cardNumber) && isSelectedCardInfo;
  const isValidCardExpiredDate = isValidMonthInput(cardExpiredDate) && isValidYearInput(cardExpiredDate);
  const isValidCardOwner = isValidCardOwnerInput(cardOwner);
  const isValidSecurityCode = isValidSecurityCodeInput(securityCode);
  const isValidCardPassword = isValidCardPasswordInput(cardPassword);
=======
  useEffect(() => {
    const fetchData = async () => {
      const response = await cardListRef.doc(targetCardId).get();
      const { cardNumber, cardExpiredDate, cardOwner, securityCode, cardPassword, selectedCardInfo } = response.data();

      setCardNumber(cardNumber);
      setCardExpiredDate(cardExpiredDate);
      setCardOwner(cardOwner);
      setSecurityCode(securityCode);
      setCardPassword(cardPassword);
      setSelectedCardInfo(selectedCardInfo);
    };

    if (targetCardId) {
      fetchData();
    }
  }, []);

  const [isValidCardNumber, setValidCardNumber] = useState(false);
  const [isValidCardExpiredDate, setValidCardExpiredDate] = useState(false);
  const [isValidCardOwner, setValidCardOwner] = useState(false);
  const [isValidSecurityCode, setValidSecurityCode] = useState(false);
  const [isValidCardPassword, setValidCardPassword] = useState(false);
>>>>>>> c50e0fd... feat: firebase에서 카드 data 수정하는 기능 구현

  const isValidAllInput =
    isValidCardNumber && isValidCardExpiredDate && isValidCardOwner && isValidSecurityCode && isValidCardPassword;

  const handleNewCardSubmit = e => {
    e.preventDefault();

    setNewCardInfo({ cardNumber, cardExpiredDate, cardOwner, securityCode, cardPassword, selectedCardInfo });
    setCurrentPage(PAGE.CARD_CREATION_COMPLETE);
  };

  const handlePrevIconClick = () => {
    setTargetCardId('');
    setCurrentPage(PAGE.CARD_LIST);
  };

  return (
    <>
      <Header>
        <Button onClick={handlePrevIconClick} styles={{ marginRight: '18px' }}>
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
