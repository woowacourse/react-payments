import { ChangeEvent, SubmitEvent } from 'react';
import styled from '@emotion/styled';
import InputFieldLayout from '../Layout/InputFieldLayout';
import { expirationDateValidator } from '../../utils/validate';
import InputFieldForm from '../Common/Form/InputFieldForm';
import {
  CARD_ISSUER_CONFIG,
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
import useCardForm from '../../hooks/useCardForm';

export type CardNumbersType = [string, string, string, string];
export type ExpirationDateType = { month: string; year: string };
export type CardIssuerType = (typeof CARD_ISSUER_CONFIG)[keyof typeof CARD_ISSUER_CONFIG]['name'];

export default function PaymentForm() {
  const navigate = useNavigate();
  const {
    values,
    step,
    serverError,
    setServerError,
    isValid,
    handleCardNumberChange,
    handleExpirationChange,
    handleTextChange,
    selectCardIssuer,
  } = useCardForm();

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const issuer = Object.values(CARD_ISSUER_CONFIG).filter(
      (issuer) => issuer.name === values.cardIssuer
    )[0];

    try {
      await registerCard({
        number: values.cardNumbers.join(''),
        expirationDate: `${values.expirationDate['month']}/${values.expirationDate['year']}`,
        cvc: values.cvc,
        issuerCode: issuer.issuerCode,
      });

      navigate('/registration/completion', {
        state: {
          prefix: values.cardNumbers[0],
          cardIssuer: values.cardIssuer,
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
          cardNumbers: values.cardNumbers,
          expirationDate: `${values.expirationDate['month']}/${values.expirationDate['year']}`,
        }}
        cardBrand={detectCardBrand(values.cardNumbers)}
        backgroundColor={getCardIssuerBackgroundColor(values.cardIssuer)}
      />

      <FormWrapper onSubmit={handleSubmit}>
        {step >= 5 && (
          <InputFieldLayout
            sectionTitle={INPUT_FIELD_CONFIG['PASSWORD'].sectionTitle}
            hintText={INPUT_FIELD_CONFIG['PASSWORD'].hintText}
          >
            <InputFieldForm
              fields={convertValueFormat(values.password).map((value) => ({
                value,
                maxLength: VALIDATION_RULE.PASSWORD_LENGTH,
                touched: !!value,
                error: false,
                errorMessage: '',
              }))}
              fieldConfig={INPUT_FIELD_CONFIG['PASSWORD']}
              onChanges={[(e: ChangeEvent<HTMLInputElement>) => handleTextChange('password')(e)]}
            />
          </InputFieldLayout>
        )}

        {step >= 4 && (
          <InputFieldLayout sectionTitle={INPUT_FIELD_CONFIG['CVC'].sectionTitle}>
            <InputFieldForm
              fields={convertValueFormat(values.cvc).map((value) => ({
                value,
                maxLength: VALIDATION_RULE.CVC_LENGTH,
                ...withServerError('CVC', value),
              }))}
              fieldConfig={INPUT_FIELD_CONFIG['CVC']}
              onChanges={[(e: ChangeEvent<HTMLInputElement>) => handleTextChange('cvc')(e)]}
            />
          </InputFieldLayout>
        )}

        {step >= 3 && (
          <InputFieldLayout
            sectionTitle={INPUT_FIELD_CONFIG['EXPIRATION_DATE'].sectionTitle}
            hintText={INPUT_FIELD_CONFIG['EXPIRATION_DATE'].hintText}
          >
            <InputFieldForm
              fields={convertValueFormat(values.expirationDate).map((value, index) => ({
                value,
                maxLength: VALIDATION_RULE.EXPIRATION_DATE_LENGTH,
                ...withServerError('EXPIRATION_DATE', value, expirationDateValidator(value, index)),
              }))}
              fieldConfig={INPUT_FIELD_CONFIG['EXPIRATION_DATE']}
              onChanges={[handleExpirationChange('month'), handleExpirationChange('year')]}
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
              onChange={selectCardIssuer}
            />
          </InputFieldLayout>
        )}

        <InputFieldLayout
          sectionTitle={INPUT_FIELD_CONFIG['CARD_NUMBERS'].sectionTitle}
          hintText={INPUT_FIELD_CONFIG['CARD_NUMBERS'].hintText}
        >
          <InputFieldForm
            fields={convertValueFormat(values.cardNumbers).map((value, index) => {
              const maxLength = getCardNumbersMaxLength(
                detectCardBrand(values.cardNumbers),
                values.cardNumbers.length,
                index
              );

              return {
                value,
                maxLength,
                ...withServerError('CARD_NUMBERS', value),
              };
            })}
            fieldConfig={INPUT_FIELD_CONFIG['CARD_NUMBERS']}
            onChanges={[0, 1, 2, 3].map(handleCardNumberChange)}
          />
        </InputFieldLayout>

        {isCardRegistrationComplete({
          cardNumbers: values.cardNumbers,
          expirationDate: values.expirationDate,
          cvc: values.cvc,
          password: values.password,
          cardIssuer: values.cardIssuer,
        }) && <Button disabled={!isValid}>확인</Button>}
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
