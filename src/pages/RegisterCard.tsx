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
  const [cardStatus, setCardStatus] = useCardNumber();
  const [cardExpiry, setCardExpiry] = useExpiryDate();
  const [cardCvc, setCardCvc] = useCardCvc();
  const [cardPassword, setCardPassword] = useCardPassword();
  const [cardCompanyStatus, setCardCompany] = useCardCompany();
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
        cardNumberPrefix: cardStatus.cardNumbers[0],
        cardCompany: cardCompanyStatus.cardCompany,
      } satisfies RegisteredCard,
    });
  };

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '45px',
        backgroundColor: theme.colors.white,
        width: '376px',
        height: '100vh',
        margin: '0 auto',
      })}
    >
      <CardPreview
        cardNumbers={cardStatus.cardNumbers}
        cardExpiryDate={cardExpiry.cardExpiryDate}
        cardBrand={cardStatus.cardBrand}
        cardCompany={cardCompanyStatus.cardCompany}
      />
      <CardInput
        cardStatus={cardStatus}
        setCardStatus={setCardStatus}
        cardExpiry={cardExpiry}
        setCardExpiry={setCardExpiry}
        cardCvc={cardCvc}
        setCardCvc={setCardCvc}
        cardPassword={cardPassword}
        setCardPassword={setCardPassword}
        cardCompanyStatus={cardCompanyStatus}
        setCardCompany={setCardCompany}
        hasBottomAction={isPasswordComplete}
      />
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
