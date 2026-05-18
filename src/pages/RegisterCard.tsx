import { useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import CardInput from '../components/CardInput';
import { useCardNumber } from '../hooks/useCardNumber';
import { useExpiryDate } from '../hooks/useExpiryDate';
import { useCardCvc } from '../hooks/useCardCvc';
import { useCardCompany } from '../hooks/useCardCompany';
import { useCardPassword } from '../hooks/useCardPassword';
import type { CardCompany } from '../types/cardStausTypes';

export type RegisteredCard = {
  cardNumberPrefix: string;
  cardCompany: Exclude<CardCompany, ''>;
};

export default function RegisterCard() {
  const navigate = useNavigate();
  const { cardNumber, cardNumberHandler } = useCardNumber();
  const { cardExpiry, expiryHandler } = useExpiryDate();
  const { cardCvc, cvcHandler } = useCardCvc();
  const { cardPassword, cardPasswordHandler } = useCardPassword();
  const { cardCompanyStatus, cardCompanyHandler } = useCardCompany();
  const isCvcComplete = cardCvc.cardCvc.length === 3 && cardCvc.cardCvcErrorMode === null;
  const isPasswordComplete =
    isCvcComplete &&
    cardPassword.cardPassword.length === 2 &&
    cardPassword.cardPasswordErrorMode === null;
  const handleComplete = () => {
    if (cardCompanyStatus.cardCompany === '') {
      return;
    }
    navigate('/complete', {
      state: {
        cardNumberPrefix: cardNumber.cardNumbers[0],
        cardCompany: cardCompanyStatus.cardCompany,
      } satisfies RegisteredCard,
    });
  };

  return (
    <div
      css={(theme) => ({
        position: 'relative',
        backgroundColor: theme.colors.white,
        width: '376px',
        height: '100vh',
        margin: '0 auto',
        boxSizing: 'border-box',
        overflow: 'hidden',
      })}
    >
      <div
        css={{
          position: 'fixed',
          top: '98px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <CardPreview
          cardNumbers={cardNumber.cardNumbers}
          cardExpiryDate={cardExpiry.cardExpiryDate}
          cardBrand={cardNumber.cardBrand}
          cardCompany={cardCompanyStatus.cardCompany}
        />
      </div>
      <div
        css={{
          position: 'absolute',
          top: '296px',
          bottom: isPasswordComplete ? '48px' : 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '315px',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <CardInput
          cardNumber={cardNumber}
          setCardStatus={cardNumberHandler}
          cardExpiry={cardExpiry}
          setCardExpiry={expiryHandler}
          cardCvc={cardCvc}
          setCardCvc={cvcHandler}
          cardPassword={cardPassword}
          setCardPassword={cardPasswordHandler}
          cardCompanyStatus={cardCompanyStatus}
          setCardCompany={cardCompanyHandler}
          hasBottomAction={isPasswordComplete}
        />
      </div>
      {isPasswordComplete && (
        <button
          type="button"
          onClick={handleComplete}
          css={(theme) => ({
            width: '376px',
            height: '48px',
            border: 'none',
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: theme.colors.cardBackground,
            color: theme.colors.white,
            cursor: 'pointer',
            zIndex: 1,
          })}
        >
          확인
        </button>
      )}
    </div>
  );
}
