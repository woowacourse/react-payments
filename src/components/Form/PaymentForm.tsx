import { ChangeEvent, SubmitEvent, useState } from 'react';
import styled from '@emotion/styled';
import InputFieldLayout from '../Layout/InputFieldLayout';
import { expirationDateValidator } from '../../utils/validate';
import InputFieldForm from '../Common/Form/InputFieldForm';
import {
  CARD_ISSUER_CONFIG,
  FIELD_STEP_SEQUENCE,
  INPUT_FIELD_CONFIG,
  InputFieldConfigType,
  SELECT_FIELD_CONFIG,
  VALIDATION_RULE,
} from '../../constants';
import { convertValueFormat } from '../../utils/convert';
import CardSelect from '../Select/CardSelect';
import { detectCardBrand, getCardIssuerBackgroundColor } from '../../utils/cards';
import { getCardNumbersMaxLength, isCardRegistrationComplete } from '../../utils/fields';
import Button from '../Common/Button/Button';
import { useNavigate } from 'react-router-dom';
import CardPreview from '../Card/CardPreview/CardPreview';
import { registerCard } from '../../apis/cards';
import { ApiError, getFieldByErrorCode } from '../../apis/api';

export type CardNumbersType = [string, string, string, string];
export type ExpirationDateType = { month: string; year: string };
export type CardIssuerType = (typeof CARD_ISSUER_CONFIG)[keyof typeof CARD_ISSUER_CONFIG]['name'];

export default function PaymentForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(1);
  const [password, setPassword] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({ month: '', year: '' });
  const [cardIssuer, setCardIssuer] = useState<CardIssuerType | null>(null);
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);

  const [serverError, setServerError] = useState<{
    field: InputFieldConfigType;
    message: string;
  } | null>(null);

  const isValid =
    isCardRegistrationComplete({ cardNumbers, expirationDate, cvc, password, cardIssuer }) &&
    !serverError;

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(e.target.value);

    advanceStep('password', value);
  };

  const handleCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearServerError('CVC');
    const value = e.target.value;
    setCVC(value);

    advanceStep('cvc', value);
  };

  const handleExpirationDateChange =
    (field: keyof ExpirationDateType) => (e: ChangeEvent<HTMLInputElement>) => {
      clearServerError('EXPIRATION_DATE');
      const newExpirationDate = { ...expirationDate };
      newExpirationDate[field] = e.target.value;
      setExpirationDate(newExpirationDate);

      advanceStep('expirationDate', newExpirationDate);
    };

  const handleCardIssuerSelect = (value: CardIssuerType | null) => {
    setCardIssuer(value);
    advanceStep('cardIssuer', value);
  };

  const handleCardNumbersChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    clearServerError('CARD_NUMBERS');
    const newCardNumbers = [...cardNumbers] as CardNumbersType;
    newCardNumbers[index] = e.target.value;
    setCardNumbers(newCardNumbers);

    advanceStep('cardNumbers', newCardNumbers);
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const issuer = Object.values(CARD_ISSUER_CONFIG).filter(
      (issuer) => issuer.name === cardIssuer
    )[0];

    try {
      await registerCard({
        number: cardNumbers.join(''),
        expirationDate: `${expirationDate['month']}/${expirationDate['year']}`,
        cvc,
        issuerCode: issuer.issuerCode,
      });

      navigate('/registration/completion', {
        state: {
          prefix: cardNumbers[0],
          cardIssuer,
        },
        replace: true,
      });
    } catch (err) {
      if (err instanceof ApiError) {
        const field = getFieldByErrorCode(err.code);
        if (field) setServerError({ field, message: err.message });
        else alert('일시적인 오류가 발생했어요. 잠시 후 다시 시도해주세요');
      } else {
        alert('일시적인 오류가 발생했어요. 잠시 후 다시 시도해주세요');
      }
    }
  };

  const advanceStep = <T,>(fieldName: string, value: T) => {
    const index = FIELD_STEP_SEQUENCE.findIndex((f) => f.name === fieldName);

    if (FIELD_STEP_SEQUENCE[index].isComplete(value)) setStep(index + 2);
  };

  const clearServerError = (field: InputFieldConfigType) => {
    if (serverError?.field === field) setServerError(null);
  };

  const withServerError = (
    field: InputFieldConfigType,
    value: string,
    localErrorField: { error: boolean; errorMessage: string } = { error: false, errorMessage: '' }
  ) => {
    const hasServerError = serverError?.field === field;
    return {
      touched: hasServerError || !!value,
      error: hasServerError || localErrorField.error,
      errorMessage: hasServerError ? serverError.message : localErrorField.errorMessage,
    };
  };

  return (
    <Container>
      <CardPreview
        fields={{
          cardNumbers,
          expirationDate: `${expirationDate['month']}/${expirationDate['year']}`,
        }}
        cardBrand={detectCardBrand(cardNumbers)}
        backgroundColor={getCardIssuerBackgroundColor(cardIssuer)}
      />

      <FormWrapper onSubmit={handleSubmit}>
        {step >= 5 && (
          <InputFieldLayout
            sectionTitle={INPUT_FIELD_CONFIG['PASSWORD'].sectionTitle}
            hintText={INPUT_FIELD_CONFIG['PASSWORD'].hintText}
          >
            <InputFieldForm
              fields={convertValueFormat(password).map((value) => ({
                value,
                maxLength: VALIDATION_RULE.PASSWORD_LENGTH,
                touched: !!value,
                error: false,
                errorMessage: '',
              }))}
              fieldConfig={INPUT_FIELD_CONFIG['PASSWORD']}
              onChanges={[handlePasswordChange]}
            />
          </InputFieldLayout>
        )}

        {step >= 4 && (
          <InputFieldLayout sectionTitle={INPUT_FIELD_CONFIG['CVC'].sectionTitle}>
            <InputFieldForm
              fields={convertValueFormat(cvc).map((value) => ({
                value,
                maxLength: VALIDATION_RULE.CVC_LENGTH,
                ...withServerError('CVC', value),
              }))}
              fieldConfig={INPUT_FIELD_CONFIG['CVC']}
              onChanges={[handleCVCChange]}
            />
          </InputFieldLayout>
        )}

        {step >= 3 && (
          <InputFieldLayout
            sectionTitle={INPUT_FIELD_CONFIG['EXPIRATION_DATE'].sectionTitle}
            hintText={INPUT_FIELD_CONFIG['EXPIRATION_DATE'].hintText}
          >
            <InputFieldForm
              fields={convertValueFormat(expirationDate).map((value, index) => ({
                value,
                maxLength: VALIDATION_RULE.EXPIRATION_DATE_LENGTH,
                ...withServerError('EXPIRATION_DATE', value, expirationDateValidator(value, index)),
              }))}
              fieldConfig={INPUT_FIELD_CONFIG['EXPIRATION_DATE']}
              onChanges={[handleExpirationDateChange('month'), handleExpirationDateChange('year')]}
            />
          </InputFieldLayout>
        )}

        {step >= 2 && (
          <InputFieldLayout
            sectionTitle={SELECT_FIELD_CONFIG['CARD_ISSUER'].sectionTitle}
            hintText={SELECT_FIELD_CONFIG['CARD_ISSUER'].hintText}
          >
            <CardSelect
              fieldConfig={SELECT_FIELD_CONFIG['CARD_ISSUER']}
              onChange={handleCardIssuerSelect}
            />
          </InputFieldLayout>
        )}

        <InputFieldLayout
          sectionTitle={INPUT_FIELD_CONFIG['CARD_NUMBERS'].sectionTitle}
          hintText={INPUT_FIELD_CONFIG['CARD_NUMBERS'].hintText}
        >
          <InputFieldForm
            fields={convertValueFormat(cardNumbers).map((value, index) => {
              const maxLength = getCardNumbersMaxLength(
                detectCardBrand(cardNumbers),
                cardNumbers.length,
                index
              );

              return {
                value,
                maxLength,
                ...withServerError('CARD_NUMBERS', value),
              };
            })}
            fieldConfig={INPUT_FIELD_CONFIG['CARD_NUMBERS']}
            onChanges={[0, 1, 2, 3].map(handleCardNumbersChange)}
          />
        </InputFieldLayout>

        {isCardRegistrationComplete({ cardNumbers, expirationDate, cvc, password, cardIssuer }) && (
          <Button disabled={!isValid}>확인</Button>
        )}
      </FormWrapper>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
