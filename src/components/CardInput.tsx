import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardPassword from './CardPassword';

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
import { useCardInput } from '../hooks/useCardInput';

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
  const {
    step,
    handleCardNumbers,
    handleCardIssuer,
    handleCardExpiryDate,
    handleCardCvc,
    handleSubmit,
    isCardPasswordValid,
  } = useCardInput({
    cardStatus,
    setCardStatus,
    cardExpiry,
    setCardExpiry,
    setCardCvc,
    cardPassword,
    cardIssuer,
    handleCardIssuer: changeCardIssuer,
  });

  return (
    <form onSubmit={handleSubmit} css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
