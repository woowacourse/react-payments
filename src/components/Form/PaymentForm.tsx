import { ChangeEvent, SubmitEvent, useState } from 'react';
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
import {
  CARD_ISSUER_CONFIG,
  INPUT_FIELD_CONFIG,
  SELECT_FIELD_CONFIG,
  VALIDATION_RULE,
} from '../../constants';
import { convertValueFormat } from '../../utils/convert';
import CardSelect from '../Select/CardSelect';
import { detectCardBrand, getCardIssuerBackgroundColor } from '../../utils/cards';
import { getCardNumbersMaxLength } from '../../utils/fields';
import Button from '../Common/Button/Button';
import { useNavigate } from 'react-router-dom';

export type Step = 1 | 2 | 3 | 4 | 5 | 6;
export type CardNumbersType = [string, string, string, string];
export type ExpirationDateType = { month: string; year: string };
export type CardIssuerType = (typeof CARD_ISSUER_CONFIG)[keyof typeof CARD_ISSUER_CONFIG]['name'];

// 구조가 일관된 기준으로 쪼개졌는지,
// 책임이 한 파일이나 훅에 몰렸는지 -> PaymentForm에서 각 필드의 핸들러를 통합적으로 관리하는 것이 맞을까?
// 하나의 수정이 여러 곳으로 퍼지는지 -> 사이드 이펙트 관련 얘기같다.

export default function PaymentForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>(1);
  const [password, setPassword] = useState<string>('');
  const [cvc, setCVC] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({ month: '', year: '' });
  const [cardIssuer, setCardIssuer] = useState<CardIssuerType | null>(null);
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);

  // TODO: 확장성은 괜찮지만, 코드의 의도를 알기 어렵고, 명확성이 떨어진다.
  // 네이밍을 조금 더 신경써보면 좋을 듯. 로직을 함수로 분리해보면 어떨까?
  // -> 그러면 계층이 하나 더 생겨서 오히려 복잡성이 올라가지 않을까?
  // 도넛: 계층이 늘어나더라도 괜찮다.
  const isValid =
    cardNumbers.every(
      (value, index) =>
        !cardNumbersValidator(
          value,
          getCardNumbersMaxLength(detectCardBrand(cardNumbers), cardNumbers.length, index)
        ).error
    ) &&
    cardIssuer &&
    Object.values(expirationDate).every((value, i) => !expirationDateValidator(value, i).error) &&
    !cvcValidator(cvc).error &&
    !passwordValidator(password).error;

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPassword(e.target.value);

    if (!passwordValidator(value).error) setStep(6);
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

    if (value) setStep(3);
  };

  const handleCardNumbersChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newCardNumbers = [...cardNumbers] as CardNumbersType;
    newCardNumbers[index] = e.target.value;
    setCardNumbers(newCardNumbers);

    if (
      newCardNumbers.every(
        (value, index) =>
          !cardNumbersValidator(
            value,
            getCardNumbersMaxLength(detectCardBrand(cardNumbers), cardNumbers.length, index)
          ).error
      )
    )
      setStep(2);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/registration/completion', {
      state: {
        prefix: cardNumbers[0],
        cardIssuer,
      },
      replace: true,
    });
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
                touched: !!value,
                maxLength: VALIDATION_RULE.PASSWORD_LENGTH,
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
                maxLength: VALIDATION_RULE.CVC_LENGTH,
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
                maxLength: VALIDATION_RULE.EXPIRATION_DATE_LENGTH,
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
            fields={convertValueFormat(cardNumbers).map((value, index) => {
              const maxLength = getCardNumbersMaxLength(
                detectCardBrand(cardNumbers),
                cardNumbers.length,
                index
              );

              return {
                value,
                touched: !!value,
                maxLength,
                ...cardNumbersValidator(value, maxLength),
              };
            })}
            fieldConfig={INPUT_FIELD_CONFIG['CARD_NUMBERS']}
            onChanges={[0, 1, 2, 3].map(handleCardNumbersChange)}
          />
        </InputFieldLayout>

        {step >= 6 && <Button disabled={!isValid}>확인</Button>}
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
