import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import CardPreview from '../CardPreview/CardPreview';
import InputFieldLayout from '../Layout/InputFieldLayout';
import { cardNumbersValidator, cvcValidator, expirationDateValidator } from '../../utils/validate';
import InputFieldForm from '../Common/Form/InputFieldForm';
import { CARD_ISSUER_CONFIG, INPUT_FIELD_CONFIG, SELECT_FIELD_CONFIG } from '../../constants';
import { convertValueFormat } from '../../utils/convert';
import CardSelect from '../Select/CardSelect';

export type CardNumbersType = [string, string, string, string];
export type ExpirationDateType = { month: string; year: string };
export type CardIssuerType = (typeof CARD_ISSUER_CONFIG)[keyof typeof CARD_ISSUER_CONFIG]['name'];

export default function PaymentForm() {
  const [cvcNumbers, setCVCNumbers] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({ month: '', year: '' });
  const [cardIssuer, setCardIssuer] = useState<CardIssuerType | null>(null);
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);

  const handleCVCNumbersChange = () => (e: ChangeEvent<HTMLInputElement>) => {
    setCVCNumbers(e.target.value);
  };

  const handleExpirationDateChange =
    (field: keyof ExpirationDateType) => (e: ChangeEvent<HTMLInputElement>) =>
      setExpirationDate((prev) => ({ ...prev, [field]: e.target.value }));

  const handleCardIssuerSelect = (value: CardIssuerType | null) => {
    setCardIssuer(value);
  };

  const handleCardNumbersChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) =>
    setCardNumbers((prev) => {
      const newCardNumbers = [...prev] as CardNumbersType;
      newCardNumbers[index] = e.target.value;
      return newCardNumbers;
    });

  return (
    <Container>
      <CardPreview
        cardNumberList={cardNumbers}
        expirationDate={`${expirationDate['month']}/${expirationDate['year']}`}
      />

      <FormWrapper>
        <InputFieldLayout sectionTitle={INPUT_FIELD_CONFIG['CVC'].sectionTitle}>
          <InputFieldForm
            fieldConfig={INPUT_FIELD_CONFIG['CVC']}
            valueList={convertValueFormat(cvcNumbers)}
            validator={cvcValidator}
            onChanges={[handleCVCNumbersChange]}
          />
        </InputFieldLayout>

        <InputFieldLayout
          sectionTitle={INPUT_FIELD_CONFIG['EXPIRATION_DATE'].sectionTitle}
          hintText={INPUT_FIELD_CONFIG['EXPIRATION_DATE'].hintText}
        >
          <InputFieldForm
            fieldConfig={INPUT_FIELD_CONFIG['EXPIRATION_DATE']}
            valueList={convertValueFormat(expirationDate)}
            validator={expirationDateValidator}
            onChanges={[handleExpirationDateChange('month'), handleExpirationDateChange('year')]}
          />
        </InputFieldLayout>

        <InputFieldLayout
          sectionTitle={SELECT_FIELD_CONFIG['CARD_ISSUER'].sectionTitle}
          hintText={SELECT_FIELD_CONFIG['CARD_ISSUER'].hintText}
        >
          <CardSelect
            fieldConfig={SELECT_FIELD_CONFIG['CARD_ISSUER']}
            onChange={handleCardIssuerSelect}
          />
        </InputFieldLayout>

        <InputFieldLayout
          sectionTitle={INPUT_FIELD_CONFIG['CARD_NUMBERS'].sectionTitle}
          hintText={INPUT_FIELD_CONFIG['CARD_NUMBERS'].hintText}
        >
          <InputFieldForm
            fieldConfig={INPUT_FIELD_CONFIG['CARD_NUMBERS']}
            valueList={convertValueFormat(cardNumbers)}
            validator={cardNumbersValidator}
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
