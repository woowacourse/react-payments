import { useState } from 'react';
import CvcField from './CvCField';
import ExpiryField from './ExpiryField';
import NumberField from './NumberField';
import type {
  CardFormHandlersType,
  CardPreviewInfoType,
} from '../../../../common/types/CardPreviewInfoType';
import styled from 'styled-components';
import FieldSection from './FieldSection';
import {
  hasCardFormError,
  validateCardNumber,
  validateCvcNumber,
  validateExpiryMonth,
  validateExpiryYear,
  validatePassword,
} from '../../utils/cardFormValidator';
import SelectCardBrandField from './SelectCardBrandField';
import PasswordField from './PasswordField';
import Button from '../../../../common/components/Button';

const InfoInputSection = ({
  cardPreviewInfo,
  cardFormHandlers,
}: {
  cardPreviewInfo: CardPreviewInfoType;
  cardFormHandlers: CardFormHandlersType;
}) => {
  const [cvcNumber, setCvcNumber] = useState('');
  const [password, setPassword] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const { cardNumbers, expiryMonth, expiryYear, cardBrandId } = cardPreviewInfo;
  const {
    handleCardNumbersChange,
    handleExpiryMonthChange,
    handleExpiryYearChange,
    handleCardBrandChange,
  } = cardFormHandlers;

  const cardFormInfo = {
    cardNumbers,
    cardBrandId,
    expiryMonth,
    expiryYear,
    cvcNumber,
    password,
  };

  const handleCvcNumberChange = (cvcNumber: string) => {
    setCvcNumber(cvcNumber);
  };

  const handlePasswordNumberChange = (password: string) => {
    setPassword(password);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasError = hasCardFormError({
      cardNumbers,
      expiryMonth,
      expiryYear,
      cvcNumber,
      password,
    });

    if (hasError) return;

    // form에 필요한 데이터: 카드번호 첫 4자리, 카드 브랜드
    console.log('제출');
  };

  const hasCardNumberError = cardNumbers.some(
    (cardNumber) => validateCardNumber(cardNumber) !== null,
  );
  if (currentStep === 0 && !hasCardNumberError)
    setCurrentStep((prev) => prev + 1);
  if (currentStep === 1 && cardBrandId !== null)
    setCurrentStep((prev) => prev + 1);
  if (
    currentStep === 2 &&
    validateExpiryMonth(expiryMonth) === null &&
    validateExpiryYear(expiryYear) === null
  )
    setCurrentStep((prev) => prev + 1);
  if (currentStep === 3 && validateCvcNumber(cvcNumber) === null)
    setCurrentStep((prev) => prev + 1);
  if (currentStep === 4 && validatePassword(password) === null)
    setCurrentStep((prev) => prev + 1);

  return (
    <Container onSubmit={handleSubmit}>
      {currentStep >= 4 && (
        <FieldSection
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요."
        >
          <PasswordField
            password={password}
            handlePasswordNumberChange={handlePasswordNumberChange}
          />
        </FieldSection>
      )}
      {currentStep >= 3 && (
        <FieldSection title="CVC 번호를 입력해 주세요">
          <CvcField
            cvcNumber={cvcNumber}
            handleCvcNumberChange={handleCvcNumberChange}
          />
        </FieldSection>
      )}
      {currentStep >= 2 && (
        <FieldSection
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpiryField
            expiryMonth={expiryMonth}
            expiryYear={expiryYear}
            handleExpiryMonthChange={handleExpiryMonthChange}
            handleExpiryYearChange={handleExpiryYearChange}
          />
        </FieldSection>
      )}
      {currentStep >= 1 && (
        <FieldSection
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
        >
          <SelectCardBrandField handleCardBrandChange={handleCardBrandChange} />
        </FieldSection>
      )}

      <FieldSection
        title="결제할 카드 번호를 입력해 주세요"
        description="본인 명의의 카드만 결제 가능합니다."
      >
        <NumberField
          cardNumbers={cardNumbers}
          handleCardNumbersChange={handleCardNumbersChange}
        />
      </FieldSection>

      <Button type="submit">제출</Button>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

export default InfoInputSection;
