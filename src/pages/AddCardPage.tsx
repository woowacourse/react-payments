import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { categorizeCardBrand } from '../utils';
import type { CardInfo } from '../types';
import Card from '../components/ui/Card';
import CardCompanyField from '../components/domain/CardCompanyField.tsx';
import PasswordField from '../components/domain/PasswordField.tsx';
import SubmitButton from '../components/domain/SubmitButton.tsx';

interface FieldState<T> {
  value: T;
  // isValid?: boolean
  // touched?: boolean
}

type CardInfoFormValue = {
  [K in keyof CardInfo]: FieldState<CardInfo[K]>;
};

export default function AddCardPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formValue, setFormValue] = useState<CardInfoFormValue>({
    cardNumbers: { value: ['', '', '', ''] },
    cardCompany: { value: null },
    expirationPeriod: { value: ['', ''] },
    cvc: { value: '' },
    password: { value: '' },
  });

  const cardBrand = categorizeCardBrand(formValue.cardNumbers.value);

  const handleFormValueUpdate = <K extends keyof CardInfo>(field: K, value: CardInfo[K]) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: { value },
    }));
  };

  const handleFieldComplete = (index) => {
    if (stepIndex === index) {
      setStepIndex(index + 1);
    }
  };

  return (
    <div css={layout}>
      <main>
        <div css={cardWrapperStyle}>
          <Card
            cardNumber={formValue.cardNumbers.value}
            expirationPeriod={formValue.expirationPeriod.value}
            cardBrand={cardBrand}
          />
        </div>
        <form css={formLayout}>
          {stepIndex >= 5 && <SubmitButton />}
          {stepIndex >= 4 && (
            <PasswordField
              value={formValue.password.value}
              onUpdated={(value) => handleFormValueUpdate('password', value)}
              onCompleted={() => handleFieldComplete(4)}
            />
          )}
          {stepIndex >= 3 && (
            <CVCField
              value={formValue.cvc.value}
              onUpdated={(value) => handleFormValueUpdate('cvc', value)}
              onCompleted={() => handleFieldComplete(3)}
            />
          )}
          {stepIndex >= 2 && (
            <ExpirationPeriodField
              value={formValue.expirationPeriod.value}
              onUpdated={(value) => handleFormValueUpdate('expirationPeriod', value)}
              onCompleted={() => handleFieldComplete(2)}
            />
          )}
          {stepIndex >= 1 && (
            <CardCompanyField
              value={formValue.cardCompany.value}
              onUpdated={(value) => handleFormValueUpdate('cardCompany', value)}
              onCompleted={() => handleFieldComplete(1)}
            />
          )}
          {stepIndex >= 0 && (
            <CardNumbersField
              value={formValue.cardNumbers.value}
              onUpdated={(value) => handleFormValueUpdate('cardNumbers', value)}
              onCompleted={() => handleFieldComplete(0)}
            />
          )}
        </form>
      </main>
    </div>
  );
}

const layout = css`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 512px;
  height: 100dvh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px 30px 80px 30px;
  overflow: scroll;
`;

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
