import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { categorizeCardBrand, validateAll } from '../utils';
import type { CardInfo } from '../types';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CardCompanySelect from '../components/domain/CardCompanySelect';
import PasswordField from '../components/domain/PasswordField';
import {
  CVC_LENGTH,
  PASSWORD_LENGTH,
  PERIOD_LENGTH_PER_INPUT,
  RULES,
  CARD_TOTAL_LENGTH,
  DEFAULT_CARD_TOTAL_LENGTH,
  CARD_CVC_LENGTH,
  FIELD_STEP,
} from '../constants';

import type { ErrorStatus, ExpirationPeriodErrorStatus } from '../types';
import type { ValidationRule } from '../utils';

interface CardNumbersFieldState {
  value: CardInfo['cardNumbers'];
  errorStatuses: [ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus, ErrorStatus]; // 4개 input별 + 1개 총 길이
}

interface ExpirationPeriodFieldState {
  value: CardInfo['expirationPeriod'];
  errorStatuses: [ExpirationPeriodErrorStatus, ExpirationPeriodErrorStatus];
}

interface FieldState<T> {
  value: T;
  errorStatuses: [ErrorStatus];
}

interface FormValue {
  cardNumbers: CardNumbersFieldState;
  cardCompany: FieldState<CardInfo['cardCompany']>;
  expirationPeriod: ExpirationPeriodFieldState;
  cvc: FieldState<CardInfo['cvc']>;
  password: FieldState<CardInfo['password']>;
}

export default function AddCardPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [formValue, setFormValue] = useState<FormValue>({
    cardNumbers: { value: ['', '', '', ''], errorStatuses: [null, null, null, null, null] },
    cardCompany: { value: '', errorStatuses: [null] },
    expirationPeriod: { value: ['', ''], errorStatuses: [null, null] },
    cvc: { value: '', errorStatuses: [null] },
    password: { value: '', errorStatuses: [null] },
  });

  const handleUpdate = <K extends keyof FormValue>(key: K, value: FormValue[K]['value'], rules: ValidationRule[]) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: { ...prev[key], value },
    }));
    const hasError = validateAll(rules, String(value)) !== null;
    if (!hasError) handleOpenNextStep(FIELD_STEP[key]);
  };

  const handleValidateForm = (): boolean => {
    const cardNumbersErrorStatuses = [
      ...formValue.cardNumbers.value.map((v) => validateAll([RULES.numberOnly, RULES.required], v)),
      validateAll([RULES.exactLength(cardNumbersTotalLength)], formValue.cardNumbers.value.join('')),
    ] as FormValue['cardNumbers']['errorStatuses'];

    const cardCompanyErrorStatuses = [
      validateAll(cardCompanyRules, formValue.cardCompany.value),
    ] as FormValue['cardCompany']['errorStatuses'];

    const expirationPeriodErrorStatuses = formValue.expirationPeriod.value.map((v) =>
      validateAll(expirationPeriodRules, v),
    ) as FormValue['expirationPeriod']['errorStatuses'];

    const cvcErrorStatuses = [validateAll(cvcRules, formValue.cvc.value)] as FormValue['cvc']['errorStatuses'];

    const passwordErrorStatuses = [
      validateAll(passwordRules, formValue.password.value),
    ] as FormValue['password']['errorStatuses'];

    setFormValue((prev) => ({
      cardNumbers: { ...prev.cardNumbers, errorStatuses: cardNumbersErrorStatuses },
      cardCompany: { ...prev.cardCompany, errorStatuses: cardCompanyErrorStatuses },
      expirationPeriod: { ...prev.expirationPeriod, errorStatuses: expirationPeriodErrorStatuses },
      cvc: { ...prev.cvc, errorStatuses: cvcErrorStatuses },
      password: { ...prev.password, errorStatuses: passwordErrorStatuses },
    }));

    return [
      ...cardNumbersErrorStatuses,
      ...cardCompanyErrorStatuses,
      ...expirationPeriodErrorStatuses,
      ...cvcErrorStatuses,
      ...passwordErrorStatuses,
    ].every((e) => e === null);
  };

  const handleSubmitForm = () => {
    const isValid = handleValidateForm();
    if (!isValid) return;
    navigate('/complete', {
      state: {
        firstFourDigits: formValue.cardNumbers.value[0],
        cardCompany: formValue.cardCompany.value,
      },
    });
  };

  const handleOpenNextStep = (currentStep: number) => {
    setStep((prev) => Math.max(prev, currentStep + 1));
  };

  const isFormValid = Object.values(formValue).every((field) =>
    field.errorStatuses.every((status: ErrorStatus | ExpirationPeriodErrorStatus) => status === null),
  );

  const cardBrand = categorizeCardBrand(formValue.cardNumbers.value);

  const cvcLength = CARD_CVC_LENGTH[cardBrand] ?? CVC_LENGTH;

  const cardNumbersTotalLength = CARD_TOTAL_LENGTH[cardBrand] ?? DEFAULT_CARD_TOTAL_LENGTH;

  const cardNumbersRules = [RULES.numberOnly, RULES.required, RULES.exactLength(cardNumbersTotalLength)];

  const expirationPeriodRules = [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT)];

  const cvcRules = [RULES.numberOnly, RULES.required, RULES.exactLength(cvcLength)];

  const cardCompanyRules = [RULES.required];

  const passwordRules = [RULES.numberOnly, RULES.required, RULES.exactLength(PASSWORD_LENGTH)];

  return (
    <main>
      <div css={cardWrapperStyle}>
        <Card
          cardNumber={formValue.cardNumbers.value}
          expirationPeriod={formValue.expirationPeriod.value}
          cardBrand={cardBrand}
        />
      </div>
      <form css={formLayout} id="add-card-form" onSubmit={handleSubmitForm}>
        <PasswordField
          value={formValue.password.value}
          onUpdated={(v) => handleUpdate('password', v, passwordRules)}
        />
        <CVCField value={formValue.cvc.value} onUpdated={(v) => handleUpdate('cvc', v, cvcRules)} />
        <ExpirationPeriodField
          value={formValue.expirationPeriod.value}
          onUpdated={(v) => handleUpdate('expirationPeriod', v, expirationPeriodRules)}
        />
        <CardCompanySelect
          value={formValue.cardCompany.value}
          onUpdated={(v) => handleUpdate('cardCompany', v, cardCompanyRules)}
        />
        <CardNumbersField
          value={formValue.cardNumbers.value}
          onUpdated={(v) => handleUpdate('cardNumbers', v, cardNumbersRules)}
        />
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
