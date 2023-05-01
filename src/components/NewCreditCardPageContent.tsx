import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useModal } from '../hooks/useModal';
import { useResisteringCreditCard } from '../hooks/useResisteringCreditCard';
import { useValidation } from '../hooks/useValidation';
import type { CreditCard, Month, Year } from '../types/CreditCard';
import {
  validateCVC,
  validateCardNumbers,
  validateCardPassword,
  validateExpirationDate,
} from '../validations/Validation';
import type { CardCompanyButtonProps } from './CardCompanyButton';
import { CardCompanyListModal } from './CardCompanyListModal';
import { CardNumberInput } from './CardNumberInput';
import { CardPasswordInput } from './CardPasswordInput';
import { CreditCardView } from './CreditCardView';
import { ExpirationDateInput } from './ExpirationDateInput';
import { Input } from './common/Input';
import { NumberInput } from './common/NumberInput';
import { Text } from './common/Text';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  padding: 28px;
`;

export const FormGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;

  margin: 10px 0px;
`;

export const FormGroupLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  align-self: flex-end;
  margin-top: auto;
`;

export const NewCreditCardPageContent = () => {
  const [resisteringCreditCard, setResisteringCreditCard] = useState<CreditCard>({
    cardCompany: '카드사',
    cardNumbers: '',
    expirationDate: ['', ''],
    name: '',
    cvc: '',
    password: '',
    nickName: '',
  });

  const setNewCardField = <Field extends keyof CreditCard>(
    field: Field,
    value: CreditCard[Field],
  ) => {
    setResisteringCreditCard({ ...resisteringCreditCard, [field]: value });
  };

  const { validationResult, validate } = useValidation<CreditCard>({
    cardNumbers: validateCardNumbers,
    expirationDate: validateExpirationDate,
    cvc: validateCVC,
    password: validateCardPassword,
  });

  const { isModalOpen, openModal, closeModal } = useModal(true);

  const { changeResisteringCreditCard } = useResisteringCreditCard();

  const navigate = useNavigate();

  const handleCardCompanyChange = (value: CardCompanyButtonProps['cardCompany']) => {
    setNewCardField('cardCompany', value);
    closeModal();
  };

  const handleCardNumbersChange = (value: string) => {
    setNewCardField('cardNumbers', value);
  };

  const handleExpirationDateChange = (value: [Month, Year]) => {
    setNewCardField('expirationDate', value);
  };

  const handleCardNameChange = (value: string) => {
    setNewCardField('name', value);
  };

  const handleCVCNumberChange = (value: string) => {
    setNewCardField('cvc', value);
  };

  const handleCardPasswordChange = (value: string) => {
    setNewCardField('password', value);
  };

  const handleClickNextButton = () => {
    if (!validate(resisteringCreditCard)) return;

    changeResisteringCreditCard(resisteringCreditCard);

    navigate('/addnickname');
  };

  return (
    <Container>
      <CreditCardView
        cardCompany={resisteringCreditCard.cardCompany}
        name={resisteringCreditCard.name}
        cardNumbers={resisteringCreditCard.cardNumbers}
        expirationDate={resisteringCreditCard.expirationDate}
        openModal={openModal}
      />

      <FormGroup>
        <Text size="small">카드 번호</Text>
        <CardNumberInput
          value={resisteringCreditCard.cardNumbers}
          onChange={handleCardNumbersChange}
        />
        {validationResult.cardNumbers?.success === false && (
          <Text size="small" color="red">
            {validationResult.cardNumbers.errorMessage}
          </Text>
        )}
      </FormGroup>

      <FormGroup>
        <Text size="small">만료일</Text>
        <ExpirationDateInput
          value={resisteringCreditCard.expirationDate}
          onChange={handleExpirationDateChange}
        />
        {validationResult.expirationDate?.success === false && (
          <Text size="small" color="red">
            {validationResult.expirationDate.errorMessage}
          </Text>
        )}
      </FormGroup>

      <FormGroup>
        <FormGroupLabel>
          <Text size="small">카드 소유자 이름(선택)</Text>
          <Text size="small">{resisteringCreditCard.name.length} / 30</Text>
        </FormGroupLabel>
        <Input
          maxCount={30}
          value={resisteringCreditCard.name}
          handleOnChange={handleCardNameChange}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </FormGroup>

      <FormGroup>
        <Text size="small">보안 코드</Text>
        <NumberInput
          maxCount={3}
          value={resisteringCreditCard.cvc}
          handleOnChange={handleCVCNumberChange}
          width={8}
          center
          type="password"
        />
        {validationResult.cvc?.success === false && (
          <Text size="small" color="red">
            {validationResult.cvc.errorMessage}
          </Text>
        )}
      </FormGroup>

      <FormGroup>
        <Text size="small">카드 비밀번호</Text>
        <CardPasswordInput
          value={resisteringCreditCard.password}
          onChange={handleCardPasswordChange}
        />
        {validationResult.password?.success === false && (
          <Text size="small" color="red">
            {validationResult.password.errorMessage}
          </Text>
        )}
      </FormGroup>

      <NextButton onClick={handleClickNextButton}>
        <Text weight="bold">다음</Text>
      </NextButton>

      {isModalOpen && (
        <CardCompanyListModal closeModal={closeModal} handleOnClick={handleCardCompanyChange} />
      )}
    </Container>
  );
};
