import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { usePayments } from '../../hooks/usePayments';
import { useValidation } from '../../hooks/useValidation';
import type { CreditCard } from '../../types/CreditCard';
import {
  validateCVC,
  validateCardNumbers,
  validateCardPassword,
  validateExpirationDate,
} from '../../validations/Validation';
import { CardNumberInput } from '../CardNumberInput';
import { CardPasswordInput } from '../CardPasswordInput';
import { CreditCardView } from '../CreditCardView';
import { ExpirationDateInput } from '../ExpirationDateInput';
import { BackButton } from '../common/BackButton';
import { Input } from '../common/Input';
import { NumberInput } from '../common/NumberInput';
import { Page } from '../common/Page';
import { Text } from '../common/Text';

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  padding: 28px;
`;

const FormGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;

  margin: 10px 0px;
`;

const FormGroupLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  align-self: flex-end;
  margin-top: auto;
`;

export const NewCreditCardPage = () => {
  const [newCard, setNewCard] = useState<CreditCard>({
    cardNumbers: '',
    expirationDate: ['', ''],
    name: '',
    cvc: '',
    password: '',
  });

  const { validate, validateField, validationResult } = useValidation<CreditCard>({
    cardNumbers: validateCardNumbers,
    expirationDate: validateExpirationDate,
    cvc: validateCVC,
    password: validateCardPassword,
  });

  const { addCreditCard } = usePayments();

  const handleChangeNewCardField =
    <Field extends keyof CreditCard>(field: Field) =>
    (value: CreditCard[Field]) => {
      validateField(field, value);
      setNewCard({ ...newCard, [field]: value });
    };

  const navigate = useNavigate();

  const handleClickBackButton = () => navigate(-1);

  const handleClickNextButton = () => {
    if (!validate(newCard)) return;

    addCreditCard(newCard);
    navigate('/');
  };

  return (
    <Page>
      <Page.Header leading={<BackButton onClick={handleClickBackButton} />}>카드추가</Page.Header>
      <Content>
        <CreditCardView
          name={newCard.name}
          cardNumbers={newCard.cardNumbers}
          expirationDate={newCard.expirationDate}
        />

        <FormGroup>
          <Text size="small">카드 번호</Text>
          <CardNumberInput
            value={newCard.cardNumbers}
            onChange={handleChangeNewCardField('cardNumbers')}
          />
          <Text size="small" color="red">
            {validationResult.cardNumbers}
          </Text>
        </FormGroup>

        <FormGroup>
          <Text size="small">만료일</Text>
          <ExpirationDateInput
            value={newCard.expirationDate}
            onChange={handleChangeNewCardField('expirationDate')}
          />
          <Text size="small" color="red">
            {validationResult.expirationDate}
          </Text>
        </FormGroup>

        <FormGroup>
          <FormGroupLabel>
            <Text size="small">카드 소유자 이름(선택)</Text>
            <Text size="small">{newCard.name.length} / 30</Text>
          </FormGroupLabel>
          <Input
            maxCount={30}
            value={newCard.name}
            onChange={handleChangeNewCardField('name')}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </FormGroup>

        <FormGroup>
          <Text size="small">보안 코드</Text>
          <NumberInput
            maxCount={3}
            value={newCard.cvc}
            onChange={handleChangeNewCardField('cvc')}
            width={8}
            center
            type="password"
          />
          <Text size="small" color="red">
            {validationResult.cvc}
          </Text>
        </FormGroup>

        <FormGroup>
          <Text size="small">카드 비밀번호</Text>
          <CardPasswordInput
            value={newCard.password}
            onChange={handleChangeNewCardField('password')}
          />
          <Text size="small" color="red">
            {validationResult.password}
          </Text>
        </FormGroup>

        <NextButton onClick={handleClickNextButton}>
          <Text weight="bold">다음</Text>
        </NextButton>
      </Content>
    </Page>
  );
};
