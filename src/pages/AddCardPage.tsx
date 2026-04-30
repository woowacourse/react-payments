import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { categorizeCardBrand } from '../utils';

export type CardBrand = 'local' | 'visa' | 'mastercard';

export interface CardInfo {
  cardNumbers: string[];
  expirationPeriod: string[];
  cvc: string;
  cardBrand: CardBrand;
}

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

  const handleformValueUpdate = <K extends keyof CardInfo>(field: K, value: CardInfo[K]) => {
    const updatedValue = { ...formValue, [field]: { value } };
    setFormValue(updatedValue);
  };

  const handleCardNumbersUpdate = (cardNumbers: CardInfo['cardNumbers']) => {
    handleformValueUpdate('cardNumbers', cardNumbers);
    const cardBrand = categorizeCardBrand(cardNumbers);
    handleformValueUpdate('cardBrand', cardBrand);
  };

  const handleExpirationPeriodUpdate = (expirationPeriod: CardInfo['expirationPeriod']) => {
    handleformValueUpdate('expirationPeriod', expirationPeriod);
  };

  const handleCVCUpdate = (cvc: CardInfo['cvc']) => {
    handleformValueUpdate('cvc', cvc);
  };

  return (
    <div css={mobileLayout}>
      <main>
        {/* <Card /> */}
        <form css={formLayout}>
          <CardNumbersField value={formValue.cardNumbers.value} onUpdated={handleCardNumbersUpdate} />
          <ExpirationPeriodField value={formValue.expirationPeriod.value} onUpdated={handleExpirationPeriodUpdate} />
          <CVCField value={formValue.cvc.value} onUpdated={handleCVCUpdate} />
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

const formLayout = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
