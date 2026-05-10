import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { categorizeCardBrand, isNumber, isValidMonth, isValidYear } from '../utils';
import type { CardInfo, ErrorStatus, ExpirationPeriodErrorStatus } from '../types';
import Card from '../components/ui/Card';
import CardCompanyField from '../components/domain/CardCompanyField.tsx';
import PasswordField from '../components/domain/PasswordField.tsx';
import SubmitButton from '../components/domain/SubmitButton.tsx';
import { type Rules, useForm } from '../hooks/useForm.ts';
import {
  CARD_NUMBER_LENGTH_PER_INPUT,
  CVC_LENGTH,
  PASSWORD_LENGTH,
  PERIOD_LENGTH_PER_INPUT,
  ROUTES,
} from '../constants.ts';
import { useNavigate } from 'react-router';

const initialValues: CardInfo = {
  cardNumbers: ['', '', '', ''],
  cardCompany: null,
  expirationPeriod: ['', ''],
  cvc: '',
  password: '',
};

// TODO: 반복되는 validate 패턴 유틸화
const rules: Rules<CardInfo, ErrorStatus | ExpirationPeriodErrorStatus> = {
  cardNumbers: [
    {
      eventType: ['change', 'blur'],
      validate: (inputValue: string) => inputValue === '',
      errorStatus: 'required',
    },
    {
      eventType: ['change'],
      validate: (inputValue: string) => !isNumber(inputValue),
      errorStatus: 'numberOnly',
    },
    {
      eventType: ['blur'],
      validate: (inputValue: string) => inputValue.length < CARD_NUMBER_LENGTH_PER_INPUT,
      errorStatus: 'invalidLength',
    },
  ],
  cardCompany: [],
  expirationPeriod: [
    {
      eventType: ['change', 'blur'],
      validate: (inputValue: string) => inputValue === '',
      errorStatus: 'required',
    },
    {
      eventType: ['change'],
      validate: (inputValue: string) => !isNumber(inputValue),
      errorStatus: 'numberOnly',
    },
    {
      eventType: ['change'],
      validate: (inputValue: string, index: number) =>
        inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 0 && !isValidMonth(inputValue),
      errorStatus: 'invalidMonth',
    },
    {
      eventType: ['change'],
      validate: (inputValue: string, index: number) =>
        inputValue.length === PERIOD_LENGTH_PER_INPUT && index === 1 && !isValidYear(inputValue),
      errorStatus: 'invalidYear',
    },
    {
      eventType: ['blur'],
      validate: (inputValue: string) => inputValue.length < PERIOD_LENGTH_PER_INPUT,
      errorStatus: 'invalidLength',
    },
  ],
  cvc: [
    {
      eventType: ['change', 'blur'],
      validate: (inputValue: string) => inputValue === '',
      errorStatus: 'required',
    },
    {
      eventType: ['change'],
      validate: (inputValue: string) => !isNumber(inputValue),
      errorStatus: 'numberOnly',
    },
    {
      eventType: ['blur'],
      validate: (inputValue: string) => inputValue.length < CVC_LENGTH,
      errorStatus: 'invalidLength',
    },
  ],
  password: [
    {
      eventType: ['change', 'blur'],
      validate: (inputValue: string) => inputValue === '',
      errorStatus: 'required',
    },
    {
      eventType: ['change'],
      validate: (inputValue: string) => !isNumber(inputValue),
      errorStatus: 'numberOnly',
    },
    {
      eventType: ['blur'],
      validate: (inputValue: string) => inputValue.length < PASSWORD_LENGTH,
      errorStatus: 'invalidLength',
    },
  ],
};

export default function AddCardPage() {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  const { values, errors, isFormValid, handleChange, handleBlur } = useForm<
    CardInfo,
    ErrorStatus | ExpirationPeriodErrorStatus
  >(initialValues, rules);

  const cardBrand = categorizeCardBrand(values.cardNumbers);

  const handleFieldComplete = (index) => {
    if (stepIndex === index) {
      setStepIndex(index + 1);
    }
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    navigate(ROUTES.ADD_CARD_COMPLETE, {
      state: {
        firstCardNumbers: values.cardNumbers[0],
        cardCompany: values.cardCompany,
      },
    });
  };

  return (
    <div css={layout}>
      <main>
        <div css={cardWrapperStyle}>
          <Card cardNumber={values.cardNumbers} expirationPeriod={values.expirationPeriod} cardBrand={cardBrand} />
        </div>
        <form onChange={handleChange} onBlur={handleBlur} onSubmit={handleSubmit} css={formLayout}>
          {stepIndex >= 5 && <SubmitButton disabled={!isFormValid} />}
          {stepIndex >= 4 && (
            <PasswordField
              value={values.password}
              errorStatus={errors.password as ErrorStatus}
              onCompleted={() => handleFieldComplete(4)}
            />
          )}
          {stepIndex >= 3 && (
            <CVCField
              value={values.cvc}
              errorStatus={errors.cvc as ErrorStatus}
              onCompleted={() => handleFieldComplete(3)}
            />
          )}
          {stepIndex >= 2 && (
            <ExpirationPeriodField
              value={values.expirationPeriod}
              errorStatus={errors.expirationPeriod as ExpirationPeriodErrorStatus[]}
              onCompleted={() => handleFieldComplete(2)}
            />
          )}
          {stepIndex >= 1 && (
            <CardCompanyField
              value={values.cardCompany}
              errorStatus={errors.cardCompany as ErrorStatus}
              onCompleted={() => handleFieldComplete(1)}
            />
          )}
          {stepIndex >= 0 && (
            <CardNumbersField
              value={values.cardNumbers}
              errorStatus={errors.cardNumbers as ErrorStatus[]}
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
