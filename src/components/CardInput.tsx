import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardPassword from './CardPassword';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import type {
  CardHandler,
  CardStatus,
  CardExpiry,
  ExpireHandler,
  Cvc,
  CvcHandler,
  CardIssuerType,
  Password,
  PasswordHandler,
} from '../types/cardStausTypes';
import CardIssuer from './CardIssuer';
import { getCardBrand, getCardNumberLength, isNumericInput } from '../utils/util';

type CardInputProps = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
  cardExpiry: CardExpiry;
  setCardExpiry: ExpireHandler;
  cardCvc: Cvc;
  setCardCvc: CvcHandler;
  cardPassword: Password;
  setCardPassword: PasswordHandler;
  cardIssuer: CardIssuerType | '';
  handleCardIssuer: (issuer: CardIssuerType) => void;
};

export default function CardInput({
  cardStatus,
  setCardStatus,
  cardExpiry,
  setCardExpiry,
  cardCvc,
  setCardCvc,
  cardPassword,
  setCardPassword,
  cardIssuer,
  handleCardIssuer: changeCardIssuer,
}: CardInputProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const openStep = (nextStep: number) => {
    setStep((prev) => Math.max(prev, nextStep));
  };

  const handleCardNumbers = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardStatus.handleCardNumbers(index)(e);

    const nextCardNumbers = [...cardStatus.cardNumbers];
    nextCardNumbers[index] = e.target.value;
    const nextCardNumber = nextCardNumbers.join('');
    const nextCardBrand = getCardBrand(nextCardNumber);

    if (
      nextCardBrand !== 'unknown' &&
      nextCardNumber.length === getCardNumberLength(nextCardBrand) &&
      isNumericInput(e.target.value)
    ) {
      openStep(1);
    }
  };

  const handleCardIssuer = (issuer: CardIssuerType) => {
    changeCardIssuer(issuer);
    openStep(2);
  };

  const handleCardExpiryDate = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpiry.handleCardExpiryDate(index)(e);

    if (
      cardExpiry.cardExpiryDate[0] !== '0' &&
      cardExpiry.cardExpiryDate[0] !== '00' &&
      cardExpiry.cardExpiryDate[1].length === 2
    ) {
      openStep(3);
    }
  };

  const handleCardCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardCvc.handleCardCvc(e);

    if (e.target.value.length === 3) {
      openStep(4);
    }
  };

  const isCardPasswordValid =
    cardPassword.cardPassword.length === 2 && cardPassword.cardPasswordErrorMode === 'normal';

  return (
    <form css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {step >= 4 && <CardPassword cardPassword={cardPassword} setCardPassword={setCardPassword} />}
      {step >= 3 && (
        <CardCvc
          cardCvc={cardCvc}
          setCardCvc={{
            ...setCardCvc,
            handleCardCvc,
          }}
        />
      )}
      {step >= 2 && (
        <CardExpiryDate
          cardExpiry={cardExpiry}
          setCardExpiry={{
            ...setCardExpiry,
            handleCardExpiryDate,
          }}
        />
      )}
      {step >= 1 && <CardIssuer cardIssuer={cardIssuer} handleCardIssuer={handleCardIssuer} />}
      <CardNumber
        cardStatus={cardStatus}
        setCardStatus={{
          ...setCardStatus,
          handleCardNumbers,
        }}
      />
      {step >= 4 && isCardPasswordValid && (
        <button
          type="submit"
          onClick={() => navigate('/complete')}
          css={(theme) => ({
            backgroundColor: theme.colors.cardBackground,
            width: '100%',
            height: '44px',
            borderRadius: '5px',
            ...theme.typography.mode,
            color: theme.colors.white,
            textAlign: 'center',
          })}
        >
          확인
        </button>
      )}
    </form>
  );
}
