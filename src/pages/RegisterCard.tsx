import { useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import CardInput from '../components/CardInput';
import { useCardForm } from '../hooks/useCardForm';
import type { CardCompany } from '../types/cardStausTypes';

export type RegisteredCard = {
  cardNumberPrefix: string;
  cardCompany: Exclude<CardCompany, ''>;
};

export default function RegisterCard() {
  const navigate = useNavigate();
  const { form, handlers, isComplete } = useCardForm();
  const handleComplete = () => {
    if (form.cardCompanyStatus.cardCompany === '') {
      return;
    }
    navigate('/complete', {
      state: {
        cardNumberPrefix: form.cardNumber.cardNumbers[0],
        cardCompany: form.cardCompanyStatus.cardCompany,
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
          cardNumbers={form.cardNumber.cardNumbers}
          cardExpiryDate={form.cardExpiry.cardExpiryDate}
          cardBrand={form.cardNumber.cardBrand}
          cardCompany={form.cardCompanyStatus.cardCompany}
        />
      </div>
      <div
        css={{
          position: 'absolute',
          top: '296px',
          bottom: isComplete ? '48px' : 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '315px',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <CardInput
          form={form}
          handlers={handlers}
          hasBottomAction={isComplete}
        />
      </div>
      {isComplete && (
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
