import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { categorizeCardBrand } from '../utils';
import type { CardInfo } from '../types';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface FieldState<T> {
  value: T;
  // error?: string
  // touched?: boolean
}

type CardInfoFormValue = {
  [K in keyof CardInfo]: FieldState<CardInfo[K]>;
};

export default function AddCardPage() {
  const [formValue, setFormValue] = useState<CardInfoFormValue>({
    cardNumbers: { value: ['', '', '', ''] },
    expirationPeriod: { value: ['', ''] },
    cvc: { value: '' },
    cardBrand: { value: 'local' },
  });

  const handleCardNumbersUpdate = (cardNumbers: CardInfo['cardNumbers']) => {
    const cardBrand = categorizeCardBrand(cardNumbers);
    setFormValue((prev) => ({
      ...prev,
      cardNumbers: { value: cardNumbers },
      cardBrand: { value: cardBrand },
    }));
  };

  const handleExpirationPeriodUpdate = (expirationPeriod: CardInfo['expirationPeriod']) => {
    setFormValue((prev) => ({
      ...prev,
      expirationPeriod: { value: expirationPeriod },
    }));
  };

  const handleCVCUpdate = (cvc: CardInfo['cvc']) => {
    setFormValue((prev) => ({
      ...prev,
      cvc: { value: cvc },
    }));
  };

  return (
    <main>
      <div css={cardWrapperStyle}>
        <Card
          cardNumber={formValue.cardNumbers.value}
          expirationPeriod={formValue.expirationPeriod.value}
          cardBrand={formValue.cardBrand.value}
        />
      </div>
      <form css={formLayout} id="add-card-form">
        <CardNumbersField value={formValue.cardNumbers.value} onUpdated={handleCardNumbersUpdate} />
        <ExpirationPeriodField value={formValue.expirationPeriod.value} onUpdated={handleExpirationPeriodUpdate} />
        <CVCField value={formValue.cvc.value} onUpdated={handleCVCUpdate} />
      </form>
      <div css={submitButtonWrapperStyle}>
        <Button type="submit" form="add-card-form" disabled>
          확인
        </Button>
      </div>
    </main>
  );
}

const cardWrapperStyle = css`
  display: flex;
  justify-content: center;
  margin: 45px auto;
`;

const formLayout = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const submitButtonWrapperStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: none
`;
