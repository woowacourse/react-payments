import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import CardPreview from '../CardPreview/CardPreview';
import InputFieldLayout from '../Layout/InputFieldLayout';
import {
  cardNumbersValidator,
  cvcValidator,
  expirationDateValidator,
  passwordValidator,
} from '../../utils/validate';
import InputFieldForm from '../Common/Form/InputFieldForm';
import { CARD_ISSUER_CONFIG, INPUT_FIELD_CONFIG, SELECT_FIELD_CONFIG } from '../../constants';
import { convertValueFormat } from '../../utils/convert';
import CardSelect from '../Select/CardSelect';
import { getCardIssuerBackgroundColor } from '../../utils/cards';

export type Step = 1 | 2 | 3 | 4 | 5;
export type CardNumbersType = [string, string, string, string];
export type ExpirationDateType = { month: string; year: string };
export type CardIssuerType = (typeof CARD_ISSUER_CONFIG)[keyof typeof CARD_ISSUER_CONFIG]['name'];

export default function PaymentForm() {
  const [step, setStep] = useState<Step>(1);

  const [password, setPassword] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({ month: '', year: '' });
  const [cardIssuer, setCardIssuer] = useState<CardIssuerType | null>(null);
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCVC(value);

    if (!cvcValidator(value).error) setStep(5);
  };

  const handleExpirationDateChange =
    (field: keyof ExpirationDateType) => (e: ChangeEvent<HTMLInputElement>) => {
      const newExpirationDate = { ...expirationDate };
      newExpirationDate[field] = e.target.value;
      setExpirationDate(newExpirationDate);

      if (
        Object.values(newExpirationDate).every(
          (value, i) => !expirationDateValidator(value, i).error
        )
      )
        setStep(4);
    };

  const handleCardIssuerSelect = (value: CardIssuerType | null) => {
    setCardIssuer(value);

    if (!cardIssuer) setStep(3);
  };

  const handleCardNumbersChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newCardNumbers = [...cardNumbers] as CardNumbersType;
    newCardNumbers[index] = e.target.value;
    setCardNumbers(newCardNumbers);

    if (newCardNumbers.every((value, i) => !cardNumbersValidator(value, i).error)) setStep(2);
  };

  return (
    <Container>
      <CardPreview
        cardNumberList={cardNumbers}
        expirationDate={`${expirationDate['month']}/${expirationDate['year']}`}
        backgroundColor={getCardIssuerBackgroundColor(cardIssuer)}
      />

      <FormWrapper>
        {step >= 5 && (
          <InputFieldLayout
            sectionTitle={INPUT_FIELD_CONFIG['PASSWORD'].sectionTitle}
            hintText={INPUT_FIELD_CONFIG['PASSWORD'].hintText}
          >
            <InputFieldForm
              fields={convertValueFormat(password).map((value) => ({
                value,
                touched: !!value,
                ...passwordValidator(value),
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
                touched: !!value,
                ...cvcValidator(value),
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
                touched: !!value,
                ...expirationDateValidator(value, index),
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
            fields={convertValueFormat(cardNumbers).map((value, index) => ({
              value,
              touched: !!value,
              ...cardNumbersValidator(value, index),
            }))}
            fieldConfig={INPUT_FIELD_CONFIG['CARD_NUMBERS']}
            onChanges={[0, 1, 2, 3].map(handleCardNumbersChange)}
          />
        </InputFieldLayout>
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
