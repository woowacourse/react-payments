import { css } from '@emotion/react';
import CardNumbersField from '../components/domain/CardNumbersField';
import ExpirationPeriodField from '../components/domain/ExpirationPeriodField';
import CVCField from '../components/domain/CVCField';
import { useRef, useState } from 'react';
import { categorizeCardBrand } from '../utils';
import type { CardInfo, ErrorStatus, ExpirationPeriodErrorStatus, ResponseStatus } from '../types';
import Card from '../components/ui/Card';
import CardCompanyField from '../components/domain/CardCompanyField.tsx';
import PasswordField from '../components/domain/PasswordField.tsx';
import SubmitButton from '../components/domain/SubmitButton.tsx';
import { useForm } from '../hooks/useForm.ts';
import { ROUTES } from '../constants.ts';
import { useNavigate } from 'react-router';
import { createCard } from '../apis/cards/api.ts';
import PaymentsError from '../apis/utils/PaymentsError.ts';

const initialValues: CardInfo = {
  cardNumbers: ['', '', '', ''],
  cardCompany: null,
  expirationPeriod: ['', ''],
  cvc: '',
  password: '',
};

export default function AddCardPage() {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  const { values, errors, isFormValid, setFieldValue, setFieldError } = useForm<
    CardInfo,
    ErrorStatus | ExpirationPeriodErrorStatus
  >(initialValues);

  const [responseStatus, setResponseStatus] = useState<ResponseStatus>('idle');
  const serverErrorFieldsRef = useRef<(keyof CardInfo)[]>([]);
  const isLoading = responseStatus === 'loading';

  const cardBrand = categorizeCardBrand(values.cardNumbers);

  const setFieldErrorWithServerError = (
    field: keyof CardInfo,
    errorStatus: ErrorStatus | ExpirationPeriodErrorStatus,
    index?: number,
  ) => {
    if (serverErrorFieldsRef.current.includes(field)) {
      if (errorStatus === null) {
        const fieldIndex = serverErrorFieldsRef.current.indexOf(field);
        serverErrorFieldsRef.current.splice(fieldIndex, 1);
      }
      setFieldError(field, errorStatus);
    } else {
      setFieldError(field, errorStatus, index);
    }
  };

  const handleFieldComplete = (index: number) => {
    if (stepIndex === index) {
      setStepIndex(index + 1);
    }
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    setResponseStatus('loading');
    try {
      await createCard(values);
      setResponseStatus('success');

      navigate(ROUTES.ADD_CARD_COMPLETE, {
        state: {
          firstCardNumbers: values.cardNumbers[0],
          cardCompany: values.cardCompany,
        },
      });
    } catch (error) {
      if (error instanceof PaymentsError) {
        setResponseStatus('error');
        const { code } = error;

        if (code === 'INVALID_CARD_NUMBER') {
          serverErrorFieldsRef.current.push('cardNumbers');
          setFieldError('cardNumbers', 'invalidValue');
        }
        if (code === 'INVALID_CVC') {
          serverErrorFieldsRef.current.push('cvc');
          setFieldError('cvc', 'invalidValue');
        }
        if (code === 'INVALID_EXPIRATION_DATE') {
          serverErrorFieldsRef.current.push('expirationPeriod');
          setFieldError('expirationPeriod', 'invalidValue');
        }
      }
    }
  };

  return (
    <div css={layout}>
      <main>
        <div css={cardWrapperStyle}>
          <Card
            cardNumber={values.cardNumbers}
            expirationPeriod={values.expirationPeriod}
            cardBrand={cardBrand}
            cardCompany={values.cardCompany}
          />
        </div>
        <form onSubmit={handleSubmit} css={formLayout}>
          {stepIndex >= 5 && <SubmitButton disabled={!isFormValid} loading={isLoading} />}
          {stepIndex >= 4 && (
            <PasswordField
              value={values.password}
              errorStatus={errors.password as ErrorStatus}
              setFieldValue={setFieldValue}
              setFieldError={setFieldErrorWithServerError}
              onCompleted={() => handleFieldComplete(4)}
            />
          )}
          {stepIndex >= 3 && (
            <CVCField
              value={values.cvc}
              cardBrand={cardBrand}
              errorStatus={errors.cvc as ErrorStatus}
              setFieldValue={setFieldValue}
              setFieldError={setFieldErrorWithServerError}
              onCompleted={() => handleFieldComplete(3)}
            />
          )}
          {stepIndex >= 2 && (
            <ExpirationPeriodField
              value={values.expirationPeriod}
              errorStatus={errors.expirationPeriod as ExpirationPeriodErrorStatus[]}
              setFieldValue={setFieldValue}
              setFieldError={setFieldErrorWithServerError}
              onCompleted={() => handleFieldComplete(2)}
            />
          )}
          {stepIndex >= 1 && (
            <CardCompanyField
              value={values.cardCompany}
              errorStatus={errors.cardCompany as ErrorStatus}
              setFieldValue={setFieldValue}
              onCompleted={() => handleFieldComplete(1)}
            />
          )}
          {stepIndex >= 0 && (
            <CardNumbersField
              value={values.cardNumbers}
              cardBrand={cardBrand}
              errorStatus={errors.cardNumbers as ErrorStatus[]}
              setFieldValue={setFieldValue}
              setFieldError={setFieldErrorWithServerError}
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
  padding: 20px 30px 100px 30px;
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
