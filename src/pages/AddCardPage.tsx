import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { categorizeCardBrand } from '../utils';
import type { CardInfo } from '../types';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CardCompanySelect from '../components/domain/CardCompanySelect';
import PasswordField from '../components/domain/PasswordField';

interface FieldState<T> {
  value: T;
  isValid: boolean;
}

type CardInfoFormValue = {
  [K in keyof CardInfo]: FieldState<CardInfo[K]>;
};

export default function AddCardPage() {
  const [formValue, setFormValue] = useState<CardInfoFormValue>({
    cardNumbers: { value: ['', '', '', ''], isValid: false },
    cardCompany: { value: '', isValid: false },
    expirationPeriod: { value: ['', ''], isValid: false },
    cvc: { value: '', isValid: false },
    password: { value: '', isValid: false },
    cardBrand: { value: 'local', isValid: false },
  });

  const handleUpdate = <K extends keyof CardInfo>(key: K, value: CardInfo[K]) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: { value, isValid: true },
    }));
  };

  const handleCardNumbersUpdate = (cardNumbers: CardInfo['cardNumbers']) => {
    const cardBrand = categorizeCardBrand(cardNumbers);
    setFormValue((prev) => ({
      ...prev,
      cardNumbers: { value: cardNumbers, isValid: true },
      cardBrand: { value: cardBrand, isValid: true },
    }));
  };

  const isFormValid = Object.values(formValue).every((field) => field.isValid);

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
        <PasswordField value={formValue.password.value} onUpdated={(v) => handleUpdate('password', v)} />
        <CVCField value={formValue.cvc.value} onUpdated={(v) => handleUpdate('cvc', v)} />
        <ExpirationPeriodField
          value={formValue.expirationPeriod.value}
          onUpdated={(v) => handleUpdate('expirationPeriod', v)}
        />
        <CardCompanySelect value={formValue.cardCompany.value} onUpdated={(v) => handleUpdate('cardCompany', v)} />
        <CardNumbersField value={formValue.cardNumbers.value} onUpdated={handleCardNumbersUpdate} />
      </form>
      <div css={submitButtonWrapperStyle}>
        <Button type="submit" form="add-card-form" disabled={!isFormValid}>
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
  display: none;
`;
