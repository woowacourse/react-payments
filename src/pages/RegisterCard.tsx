import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import CardInput from '../components/CardInput';
import { useCardForm } from '../hooks/useCardForm';
import { useRegisterCard } from '../hooks/useRegisterCard';
import { CARD_COMPANY_ISSUER_CODE } from '../constants/cardCompanies';
import type { CardCompany } from '../types/cardStatusTypes';

export type RegisteredCard = {
  cardNumberPrefix: string;
  cardCompany: Exclude<CardCompany, ''>;
};

export default function RegisterCard() {
  const navigate = useNavigate();
  const { form, handlers, completion } = useCardForm();
  const { registerCardState, register } = useRegisterCard();

  const apiError = registerCardState.status === 'error' ? registerCardState.error : null;

  const handleComplete = () => {
    if (form.cardCompanyStatus.cardCompany === '') return;

    register({
      number: form.cardNumber.cardNumbers.join(''),
      expirationDate: form.cardExpiry.cardExpiryDate.join('/'),
      cvc: form.cardCvc.cardCvc,
      issuerCode: CARD_COMPANY_ISSUER_CODE[form.cardCompanyStatus.cardCompany],
    });
  };

  useEffect(() => {
    if (registerCardState.status === 'success') {
      navigate('/cards');
    }
  }, [registerCardState.status, navigate]);

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
          bottom: completion.isComplete ? '48px' : 0,
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
          completion={completion}
          hasBottomAction={completion.isComplete}
          apiError={apiError}
        />
      </div>
      {completion.isComplete && (
        <button
          type="button"
          onClick={handleComplete}
          disabled={registerCardState.status === 'loading'}
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
            cursor: registerCardState.status === 'loading' ? 'not-allowed' : 'pointer',
            opacity: registerCardState.status === 'loading' ? 0.6 : 1,
            zIndex: 1,
          })}
        >
          {registerCardState.status === 'loading' ? '등록 중...' : '확인'}
        </button>
      )}
    </div>
  );
}
