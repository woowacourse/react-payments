import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { categorizeCardBrand, validate, validateAll, type ValidationRule } from '../utils';
import type { CardInfo } from '../types';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CardCompanySelect from '../components/domain/CardCompanySelect';
import PasswordField from '../components/domain/PasswordField';
import {
  DEFAULT_CVC_LENGTH,
  PASSWORD_LENGTH,
  PERIOD_LENGTH_PER_INPUT,
  RULES,
  CARD_TOTAL_LENGTH,
  DEFAULT_CARD_TOTAL_LENGTH,
  CARD_CVC_MAX_LENGTH,
  FIELD_STEP,
  CARD_COMPANY_OPTIONS,
} from '../constants';
import type { ErrorStatus, ExpirationPeriodErrorStatus } from '../types';

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

  const handleUpdate = <K extends keyof FormValue>(key: K, value: FormValue[K]['value']) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: { ...prev[key], value },
    }));
  };

  const handleValid = <K extends keyof FormValue>(key: K) => {
    handleOpenNextStep(FIELD_STEP[key]);
  };

  const handleErrorUpdated = <K extends keyof FormValue>(key: K, errorStatuses: FormValue[K]['errorStatuses']) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: { ...prev[key], errorStatuses },
    }));
  };

  const handleCardNumbersValid = (value: CardInfo['cardNumbers']) => {
    const totalError = validate([RULES.exactLength(cardNumbersTotalLength)], 'onBlur', value.join(''));
    handleErrorUpdated('cardNumbers', [
      ...formValue.cardNumbers.errorStatuses.slice(0, 4),
      totalError as FormValue['cardNumbers']['errorStatuses'][4],
    ] as FormValue['cardNumbers']['errorStatuses']);
    if (!totalError) handleValid('cardNumbers');
  };

  const getExpirationPeriodErrorStatuses = (
    value: CardInfo['expirationPeriod'],
  ): FormValue['expirationPeriod']['errorStatuses'] => {
    const monthError = validateAll(
      expirationPeriodRules[0],
      value[0],
    ) as FormValue['expirationPeriod']['errorStatuses'][0];
    const yearFieldError = validateAll(
      expirationPeriodRules[1],
      value[1],
    ) as FormValue['expirationPeriod']['errorStatuses'][1];
    const combinedError =
      monthError !== null || yearFieldError !== null
        ? null
        : (validate(
            [RULES.validMonthAndYear],
            'onBlur',
            value.join(''),
          ) as FormValue['expirationPeriod']['errorStatuses'][1]);

    return [monthError, yearFieldError ?? combinedError];
  };

  const handleExpirationPeriodValid = (value: CardInfo['expirationPeriod']) => {
    const errorStatuses = getExpirationPeriodErrorStatuses(value);
    handleErrorUpdated('expirationPeriod', errorStatuses);
    if (errorStatuses.every((status) => status === null)) handleValid('expirationPeriod');
  };

  const handleCvcValid = (value: CardInfo['cvc']) => {
    const errorStatus = validateAll(cvcRules, value) as FormValue['cvc']['errorStatuses'][0];
    handleErrorUpdated('cvc', [errorStatus]);
    if (!errorStatus) handleValid('cvc');
  };

  const handleCardCompanyValid = (value: CardInfo['cardCompany']) => {
    const errorStatus = validateAll(cardCompanyRules, value) as FormValue['cardCompany']['errorStatuses'][0];
    handleErrorUpdated('cardCompany', [errorStatus]);
    if (!errorStatus) handleValid('cardCompany');
  };

  const handleValidateForm = (): boolean => {
    const cardNumbersErrorStatuses = [
      ...formValue.cardNumbers.value.map((v) => validateAll([RULES.numberOnly, RULES.required], v)),
      validateAll([RULES.exactLength(cardNumbersTotalLength)], formValue.cardNumbers.value.join('')),
    ] as FormValue['cardNumbers']['errorStatuses'];

    const cardCompanyErrorStatuses = [
      validateAll(cardCompanyRules, formValue.cardCompany.value),
    ] as FormValue['cardCompany']['errorStatuses'];

    const expirationPeriodErrorStatuses = getExpirationPeriodErrorStatuses(formValue.expirationPeriod.value);

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

  const handleSubmitForm = (e: React.SubmitEvent) => {
    e.preventDefault();
    const isValid = handleValidateForm();
    if (!isValid) return;
    navigate('/complete', {
      state: {
        firstFourDigits: formValue.cardNumbers.value[0],
        cardCompany: CARD_COMPANY_OPTIONS.find((o) => o.value === formValue.cardCompany.value)?.label ?? '카드',
      },
    });
  };

  const handleOpenNextStep = (currentStep: number) => {
    setStep((prev) => Math.max(prev, currentStep + 1));
  };

  const isFormValid =
    step >= FIELD_STEP.password &&
    Object.values(formValue).every((field) =>
      field.errorStatuses.every((status: ErrorStatus | ExpirationPeriodErrorStatus) => status === null),
    );

  const cardBrand = categorizeCardBrand(formValue.cardNumbers.value);

  const cvcLength = CARD_CVC_MAX_LENGTH[cardBrand] ?? DEFAULT_CVC_LENGTH;

  const cardNumbersTotalLength = CARD_TOTAL_LENGTH[cardBrand] ?? DEFAULT_CARD_TOTAL_LENGTH;

  const cardNumbersRules = [RULES.numberOnly, RULES.required, RULES.exactLength(cardNumbersTotalLength)];

  const expirationPeriodRules: [ValidationRule[], ValidationRule[]] = [
    [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT), RULES.validMonth],
    [RULES.numberOnly, RULES.required, RULES.exactLength(PERIOD_LENGTH_PER_INPUT), RULES.validYear],
  ];

  const cvcRules = [RULES.numberOnly, RULES.required, RULES.exactLength(cvcLength)];

  const cardCompanyRules = [RULES.required];

  const passwordRules = [RULES.numberOnly, RULES.required, RULES.exactLength(PASSWORD_LENGTH)];

  return (
    <main css={mainStyle}>
      <div css={cardWrapperStyle}>
        <Card
          cardNumber={formValue.cardNumbers.value}
          expirationPeriod={formValue.expirationPeriod.value}
          cardBrand={cardBrand}
          cardCompany={formValue.cardCompany.value}
        />
      </div>
      <form css={formLayout} id="add-card-form" onSubmit={handleSubmitForm}>
        {step >= FIELD_STEP.password && (
          <PasswordField
            value={formValue.password.value}
            errorStatuses={formValue.password.errorStatuses}
            onUpdated={(v) => handleUpdate('password', v)}
            onErrorUpdated={(e) => handleErrorUpdated('password', e)}
            validationRules={passwordRules}
          />
        )}
        {step >= FIELD_STEP.cvc && (
          <CVCField
            value={formValue.cvc.value}
            errorStatuses={formValue.cvc.errorStatuses}
            minLength={DEFAULT_CVC_LENGTH}
            maxLength={cvcLength}
            onUpdated={(v) => handleUpdate('cvc', v)}
            onErrorUpdated={(e) => handleErrorUpdated('cvc', e)}
            onValid={handleCvcValid}
            validationRules={cvcRules}
          />
        )}
        {step >= FIELD_STEP.expirationPeriod && (
          <ExpirationPeriodField
            value={formValue.expirationPeriod.value}
            errorStatuses={formValue.expirationPeriod.errorStatuses}
            onUpdated={(v) => handleUpdate('expirationPeriod', v)}
            onErrorUpdated={(e) => handleErrorUpdated('expirationPeriod', e)}
            onValid={handleExpirationPeriodValid}
            validationRules={expirationPeriodRules}
          />
        )}
        {step >= FIELD_STEP.cardCompany && (
          <CardCompanySelect
            value={formValue.cardCompany.value}
            errorStatuses={formValue.cardCompany.errorStatuses}
            onUpdated={(v) => handleUpdate('cardCompany', v)}
            onErrorUpdated={(e) => handleErrorUpdated('cardCompany', e)}
            onValid={handleCardCompanyValid}
            validationRules={cardCompanyRules}
          />
        )}
        <CardNumbersField
          value={formValue.cardNumbers.value}
          errorStatuses={formValue.cardNumbers.errorStatuses}
          onUpdated={(v) => handleUpdate('cardNumbers', v)}
          onErrorUpdated={(e) => handleErrorUpdated('cardNumbers', e)}
          onValid={handleCardNumbersValid}
          validationRules={cardNumbersRules.slice(0, 2)}
        />
      </form>
      {isFormValid && (
        <div css={submitButtonWrapperStyle}>
          <Button type="submit" form="add-card-form">
            확인
          </Button>
        </div>
      )}
    </main>
  );
}

const mainStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const cardWrapperStyle = css`
  display: flex;
  justify-content: center;
  margin: 45px auto;
  padding: 0 30px;
`;

const formLayout = css`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 30px;
`;

const submitButtonWrapperStyle = css`
  position: sticky;
  width: 100%;
`;
