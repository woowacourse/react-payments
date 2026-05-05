import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import CardPreview from '../CardPreview/CardPreview';
import InputFieldLayout from '../Layout/InputFieldLayout';
import { cardNumbersValidator, expirationDateValidator } from '../../utils/validate';
import CVCFieldForm from './CVCFieldForm';
import InputFieldForm from '../Common/Form/InputFieldForm';
import { INPUT_FIELD_CONFIG } from '../../constants';

export type CardNumbersType = [string, string, string, string];
export type ExpirationDateType = { month: string; year: string };

export default function PaymentForm() {
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({ month: '', year: '' });

  const handleCardNumbersChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setCardNumbers((prev) => {
      const newCardNumbers = [...prev] as CardNumbersType;
      newCardNumbers[index] = e.target.value;
      return newCardNumbers;
    });
  };

  const handleExpirationDateChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const key = index === 0 ? 'month' : 'year';

    setExpirationDate((prev) => {
      const newExpirationDate = { ...prev };
      newExpirationDate[key] = e.target.value;
      return newExpirationDate;
    });
  };

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
          <InputFieldForm<CardNumbersType>
            fieldConfig={INPUT_FIELD_CONFIG['CARD_NUMBERS']}
            value={cardNumbers}
            validator={cardNumbersValidator}
            onChange={handleCardNumbersChange}
          />
        </InputFieldLayout>

        <InputFieldLayout
          sectionTitle={INPUT_FIELD_CONFIG['EXPIRATION_DATE'].sectionTitle}
          hintText={INPUT_FIELD_CONFIG['EXPIRATION_DATE'].hintText}
        >
          <InputFieldForm<ExpirationDateType>
            fieldConfig={INPUT_FIELD_CONFIG['EXPIRATION_DATE']}
            value={expirationDate}
            validator={expirationDateValidator}
            onChange={handleExpirationDateChange}
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
