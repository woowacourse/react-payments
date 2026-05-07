import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import CardPreview from '../CardPreview/CardPreview';
import InputFieldLayout from '../Layout/InputFieldLayout';
import { cardNumbersValidator, expirationDateValidator } from '../../utils/validate';
import CVCFieldForm from './CVCFieldForm';
import InputFieldForm from '../Common/Form/InputFieldForm';
import { INPUT_FIELD_CONFIG } from '../../constants';
import { convertValueFormat } from '../../utils/convert';

export type CardNumbersType = [string, string, string, string];
export type ExpirationDateType = { month: string; year: string };

export default function PaymentForm() {
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({ month: '', year: '' });

  const handleCardNumbersChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) =>
    setCardNumbers((prev) => {
      const newCardNumbers = [...prev] as CardNumbersType;
      newCardNumbers[index] = e.target.value;
      return newCardNumbers;
    });

  const handleExpirationDateChange =
    (field: keyof ExpirationDateType) => (e: ChangeEvent<HTMLInputElement>) =>
      setExpirationDate((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <Container>
      <CardPreview
        cardNumberList={cardNumbers}
        expirationDate={`${expirationDate['month']}/${expirationDate['year']}`}
      />

      <FormWrapper>
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

        <InputFieldLayout sectionTitle={INPUT_FIELD_CONFIG['CVC'].sectionTitle}>
          <CVCFieldForm />
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
