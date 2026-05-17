import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CardCompanySelect from '../components/domain/CardCompanySelect';
import PasswordField from '../components/domain/PasswordField';
import { FIELD_STEP } from '../constants';
import useAddCardForm, { type AddCardFormFieldKey } from '../hooks/useAddCardForm';

export default function AddCardPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const {
    formValue: { cardNumbers, cardCompany, expirationPeriod, cvc, password },
    derived: { cardBrand, areAllFieldErrorsClear },
    rules,
    actions: {
      updateValue,
      updateErrors,
      validateAllFields,
      validateCardNumbersOnComplete,
      validateCvcOnComplete,
      validateExpirationPeriodOnComplete,
      validateCardCompanyOnComplete,
      buildCompletePageState,
    },
  } = useAddCardForm();

  const cardNumbersRef = useRef<HTMLInputElement>(null);
  const cardCompanyRef = useRef<HTMLSelectElement>(null);
  const expirationPeriodRef = useRef<HTMLInputElement>(null);
  const cvcRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const focusFirstErrorField = () => {
    const fields = { cardNumbers, cardCompany, expirationPeriod, cvc, password };
    const refs = {
      cardNumbers: cardNumbersRef,
      cardCompany: cardCompanyRef,
      expirationPeriod: expirationPeriodRef,
      cvc: cvcRef,
      password: passwordRef,
    };

    const firstErrorField = Object.entries(FIELD_STEP)
      .sort(([, a], [, b]) => b - a)
      .find(([key]) => fields[key as AddCardFormFieldKey]?.errorStatuses.some((s) => s !== null))?.[0] as
      | AddCardFormFieldKey
      | undefined;

    if (firstErrorField) refs[firstErrorField].current?.focus();
  };

  const handleSubmitForm = (e: React.SubmitEvent) => {
    e.preventDefault();
    const isValid = validateAllFields();
    if (!isValid) {
      focusFirstErrorField();
      return;
    }
    navigate('/complete', { state: buildCompletePageState() });
  };

  const handleOpenNextStep = (currentStep: number) => {
    setStep((prev) => Math.max(prev, currentStep + 1));
  };

  const runAndOpenNextStep =
    <T,>(key: AddCardFormFieldKey, validate: (value: T) => boolean) =>
    (value: T) => {
      if (validate(value)) handleOpenNextStep(FIELD_STEP[key]);
    };

  const isFormValid = step >= FIELD_STEP.password && areAllFieldErrorsClear;

  return (
    <main css={mainStyle}>
      <div css={cardWrapperStyle}>
        <Card
          cardNumber={cardNumbers.value}
          expirationPeriod={expirationPeriod.value}
          cardBrand={cardBrand}
          cardCompany={cardCompany.value}
        />
      </div>
      <form css={formLayout} id="add-card-form" onSubmit={handleSubmitForm}>
        {step >= FIELD_STEP.password && (
          <PasswordField
            ref={passwordRef}
            value={password.value}
            errorStatuses={password.errorStatuses}
            onUpdated={(value) => updateValue('password', value)}
            onErrorUpdated={(errorStatuses) => updateErrors('password', errorStatuses)}
            validationRules={rules.password}
          />
        )}
        {step >= FIELD_STEP.cvc && (
          <CVCField
            ref={cvcRef}
            value={cvc.value}
            errorStatuses={cvc.errorStatuses}
            onUpdated={(value) => updateValue('cvc', value)}
            onErrorUpdated={(errorStatuses) => updateErrors('cvc', errorStatuses)}
            validationRules={rules.cvc}
            onValid={runAndOpenNextStep('cvc', validateCvcOnComplete)}
          />
        )}
        {step >= FIELD_STEP.expirationPeriod && (
          <ExpirationPeriodField
            ref={expirationPeriodRef}
            value={expirationPeriod.value}
            errorStatuses={expirationPeriod.errorStatuses}
            onUpdated={(value) => updateValue('expirationPeriod', value)}
            onErrorUpdated={(errorStatuses) => updateErrors('expirationPeriod', errorStatuses)}
            validationRules={rules.expirationPeriod}
            onValid={runAndOpenNextStep('expirationPeriod', validateExpirationPeriodOnComplete)}
          />
        )}
        {step >= FIELD_STEP.cardCompany && (
          <CardCompanySelect
            ref={cardCompanyRef}
            value={cardCompany.value}
            errorStatuses={cardCompany.errorStatuses}
            onUpdated={(value) => updateValue('cardCompany', value)}
            onErrorUpdated={(errorStatuses) => updateErrors('cardCompany', errorStatuses)}
            validationRules={rules.cardCompany}
            onValid={runAndOpenNextStep('cardCompany', validateCardCompanyOnComplete)}
          />
        )}
        <CardNumbersField
          ref={cardNumbersRef}
          value={cardNumbers.value}
          errorStatuses={cardNumbers.errorStatuses}
          onUpdated={(value) => updateValue('cardNumbers', value)}
          onErrorUpdated={(errorStatuses) => updateErrors('cardNumbers', errorStatuses)}
          validationRules={rules.cardNumbers}
          onValid={runAndOpenNextStep('cardNumbers', validateCardNumbersOnComplete)}
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
