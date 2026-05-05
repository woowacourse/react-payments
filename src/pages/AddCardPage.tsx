import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { categorizeCardBrand } from '../utils';
import type { CardInfo } from '../types';
import Card from '../components/ui/Card';

interface FieldState<T> {
  value: T;
  // isValid?: boolean
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
  });

  const cardBrand = categorizeCardBrand(formValue.cardNumbers.value);

  const handleFormValueUpdate = <K extends keyof CardInfo>(field: K, value: CardInfo[K]) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: { value },
    }));
  };

  return (
    <div css={mobileLayout}>
      <main>
        <div css={cardWrapperStyle}>
          <Card
            cardNumber={formValue.cardNumbers.value}
            expirationPeriod={formValue.expirationPeriod.value}
            cardBrand={cardBrand}
          />
        </div>
        <form css={formLayout}>
          <CardNumbersField
            value={formValue.cardNumbers.value}
            onUpdated={(...params) => handleFormValueUpdate('cardNumbers', ...params)}
          />
          <ExpirationPeriodField
            value={formValue.expirationPeriod.value}
            onUpdated={(...params) => handleFormValueUpdate('expirationPeriod', ...params)}
          />
          <CVCField value={formValue.cvc.value} onUpdated={(...params) => handleFormValueUpdate('cvc', ...params)} />
        </form>
      </main>
    </div>
  );
}

const mobileLayout = css`
  display: flex;
  flex-direction: column;
  width: 376px;
  height: 700px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px 30px;
  overflow: scroll;
  border-radius: 20px;
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
