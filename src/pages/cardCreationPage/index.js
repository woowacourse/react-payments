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

const CardCreationPage = ({ setCurrentPage }) => {
  const [cardNumber, setCardNumber] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const [cardExpiredDate, setCardExpiredDate] = useState({
    month: '',
    year: '',
  });
  const [cardOwner, setCardOwner] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPassword] = useState({
    0: '',
    1: '',
  });
  const [selectedCardInfo, setSelectedCardInfo] = useState({ id: null, name: '', color: COLOR.LIGHT_GRAY });

  const [isValidCardNumber, setValidCardNumber] = useState(false);
  const [isValidCardExpiredDate, setValidCardExpiredDate] = useState(false);
  const [isValidCardOwner, setValidCardOwner] = useState(false);
  const [isValidSecurityCode, setValidSecurityCode] = useState(false);
  const [isValidCardPassword, setValidCardPassword] = useState(false);

  const isValidAllInput =
    isValidCardNumber &&
    isValidCardExpiredDate &&
    isValidCardOwner &&
    isValidSecurityCode &&
    isValidCardPassword &&
    selectedCardInfo.id;

  return (
    <>
      <Header>
        <Button styles={{ marginRight: '18px' }}>
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
        <Styled.Form>
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
        </Styled.Form>
      </div>
      <Styled.ButtonContainer>
        {isValidAllInput && (
          <Button onClick={() => setCurrentPage(PAGE.CARD_CREATION_COMPLETE)} styles={{ color: COLOR.MINT }}>
            다음
          </Button>
        )}
      </Styled.ButtonContainer>
    </>
  );
};

export default CardCreationPage;
