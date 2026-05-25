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
import { ROUTES } from '../routes';
import useAddCard from '../hooks/useAddCard';

const FORM_FIELDS_DESCENDING_STEP: AddCardFormFieldKey[] = [
  'password',
  'cvc',
  'expirationPeriod',
  'cardCompany',
  'cardNumbers',
];

export default function AddCardPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const {
    formValue,
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

  const { requestAddCard, serverValidationError, clearServerValidationError, isLoading } = useAddCard(formValue);

  const cardNumbersRef = useRef<HTMLInputElement>(null);
  const cardCompanyRef = useRef<HTMLSelectElement>(null);
  const expirationPeriodRef = useRef<HTMLInputElement>(null);
  const cvcRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const serverErrorOf = (field: AddCardFormFieldKey) =>
    serverValidationError?.field === field ? serverValidationError.message : undefined;

  const focusField = (field: AddCardFormFieldKey) => {
    const refs = {
      cardNumbers: cardNumbersRef,
      cardCompany: cardCompanyRef,
      expirationPeriod: expirationPeriodRef,
      cvc: cvcRef,
      password: passwordRef,
    };
    refs[field].current?.focus();
  };

  const focusFirstErrorField = () => {
    const firstErrorField = FORM_FIELDS_DESCENDING_STEP.find((field) =>
      formValue[field].errorStatuses.some((status) => status !== null),
    );
    if (firstErrorField) focusField(firstErrorField);
  };

  const handleSubmitForm = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const isValid = validateAllFields();
    if (!isValid) {
      focusFirstErrorField();
      return;
    }

    const result = await requestAddCard();
    if (result.status === 'success') {
      navigate(ROUTES.addCardComplete, { state: buildCompletePageState() });
      return;
    }
    if (result.status === 'validationError') {
      focusField(result.field);
      return;
    }
    window.alert('카드 등록에 실패했습니다. 다시 시도해주세요.');
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
            onUpdated={(value) => {
              updateValue('cvc', value);
              clearServerValidationError();
            }}
            onErrorUpdated={(errorStatuses) => updateErrors('cvc', errorStatuses)}
            validationRules={rules.cvc}
            onValid={runAndOpenNextStep('cvc', validateCvcOnComplete)}
            serverError={serverErrorOf('cvc')}
          />
        )}
        {step >= FIELD_STEP.expirationPeriod && (
          <ExpirationPeriodField
            ref={expirationPeriodRef}
            value={expirationPeriod.value}
            errorStatuses={expirationPeriod.errorStatuses}
            onUpdated={(value) => {
              updateValue('expirationPeriod', value);
              clearServerValidationError();
            }}
            onErrorUpdated={(errorStatuses) => updateErrors('expirationPeriod', errorStatuses)}
            validationRules={rules.expirationPeriod}
            onValid={runAndOpenNextStep('expirationPeriod', validateExpirationPeriodOnComplete)}
            serverError={serverErrorOf('expirationPeriod')}
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
          onUpdated={(value) => {
            updateValue('cardNumbers', value);
            clearServerValidationError();
          }}
          onErrorUpdated={(errorStatuses) => updateErrors('cardNumbers', errorStatuses)}
          validationRules={rules.cardNumbers}
          onValid={runAndOpenNextStep('cardNumbers', validateCardNumbersOnComplete)}
          serverError={serverErrorOf('cardNumbers')}
        />
      </form>
      {isFormValid && (
        <div css={submitButtonWrapperStyle}>
          <Button type="submit" form="add-card-form" disabled={isLoading}>
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
