import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CardCompanySelect from '../components/domain/CardCompanySelect';
import PasswordField from '../components/domain/PasswordField';
import { FIELD_STEP } from '../constants';
import useAddCardForm, { type AddCardFormFieldKey, createInitialFormValue } from '../hooks/useAddCardForm';

export default function AddCardPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const {
    formValue,
    derived: { cardBrand, areAllFieldErrorsClear },
    fieldProps,
    actions,
  } = useAddCardForm({ initialValue: createInitialFormValue() });

  const handleSubmitForm = (e: React.SubmitEvent) => {
    e.preventDefault();
    const isValid = actions.validateAllFields();
    if (!isValid) return;
    navigate('/complete', { state: actions.buildCompletePageState() });
  };

  const handleOpenNextStep = (currentStep: number) => {
    setStep((prev) => Math.max(prev, currentStep + 1));
  };

  const runAndOpenNextStep = (key: AddCardFormFieldKey, validate: () => boolean) => {
    if (validate()) {
      handleOpenNextStep(FIELD_STEP[key]);
    }
  };

  const isFormValid = step >= FIELD_STEP.password && areAllFieldErrorsClear;

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
            {...fieldProps.password}
          />
        )}
        {step >= FIELD_STEP.cvc && (
          <CVCField
            {...fieldProps.cvc}
            onValid={(value) => runAndOpenNextStep('cvc', () => actions.validateCvcOnComplete(value))}
          />
        )}
        {step >= FIELD_STEP.expirationPeriod && (
          <ExpirationPeriodField
            {...fieldProps.expirationPeriod}
            onValid={(value) => runAndOpenNextStep('expirationPeriod', () => actions.validateExpirationPeriodOnComplete(value))}
          />
        )}
        {step >= FIELD_STEP.cardCompany && (
          <CardCompanySelect
            {...fieldProps.cardCompany}
            onValid={(value) => runAndOpenNextStep('cardCompany', () => actions.validateCardCompanyOnComplete(value))}
          />
        )}
        <CardNumbersField
          {...fieldProps.cardNumbers}
          onValid={(value) => runAndOpenNextStep('cardNumbers', () => actions.validateCardNumbersOnComplete(value))}
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
