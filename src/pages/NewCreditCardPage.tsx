import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowDownIcon } from '../assets/common/arrow-down.svg';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { NumberInput } from '../components/common/NumberInput';
import { Page } from '../components/common/Page';
import { Text } from '../components/common/Text';
import { CardNumberInput } from '../components/payments/CardNumberInput';
import { CardPasswordInput } from '../components/payments/CardPasswordInput';
import { CreditCardView } from '../components/payments/CreditCardView';
import { ExpirationDateInput } from '../components/payments/ExpirationDateInput';
import { VendorIcon } from '../components/payments/VendorIcon';
import type { CreditCard } from '../domain/CreditCard';
import { CreditCardVendors } from '../domain/CreditCardVendor';
import { usePayments } from '../hooks/usePayments';
import { useValidation } from '../hooks/useValidation';
import {
  validateCVC,
  validateCardNumbers,
  validateCardPassword,
  validateExpirationDate,
} from '../validations/Validation';

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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: auto;
  width: 100%;
`;

export const NewCreditCardPage = () => {
  const location = useLocation();
  const vendor = location.state.vendor ?? '현대카드';

  const [newCard, setNewCard] = useState<CreditCard>({
    owner: '',
    displayName: '',
    vendor,
    cardNumbers: '',
    expirationDate: ['', ''],
    cvc: '',
    password: '',
  });
  const [showBackface, setShowBackface] = useState(false);

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
    const newCardWithDisplayName: CreditCard = {
      ...newCard,
      displayName: newCard.owner ? `${newCard.owner}의 카드` : '',
    };

    if (!validate(newCardWithDisplayName)) return;

    addCreditCard(newCardWithDisplayName);
    navigate('/');
  };

  return (
    <Page>
      <Page.Header
        leading={
          <Button onClick={handleClickBackButton}>
            <ArrowDownIcon />
          </Button>
        }
      >
        카드추가
      </Page.Header>
      <Content>
        <CreditCardView
          owner={newCard.owner}
          vendor={newCard.vendor}
          cardNumbers={newCard.cardNumbers}
          expirationDate={newCard.expirationDate}
          cvc={newCard.cvc}
          color={CreditCardVendors[newCard.vendor].color}
          icon={<VendorIcon vendor={newCard.vendor} />}
          showBackface={showBackface}
        />

        <FormGroup>
          <Text size="small">카드 번호</Text>
          <CardNumberInput
            value={newCard.cardNumbers}
            onChange={handleChangeNewCardField('cardNumbers')}
          />
          <Text size="small" color="warning">
            {validationResult.cardNumbers}
          </Text>
        </FormGroup>

        <FormGroup>
          <Text size="small">만료일</Text>
          <ExpirationDateInput
            value={newCard.expirationDate}
            onChange={handleChangeNewCardField('expirationDate')}
          />
          <Text size="small" color="warning">
            {validationResult.expirationDate}
          </Text>
        </FormGroup>

        <FormGroup>
          <FormGroupLabel>
            <Text size="small">카드 소유자 이름(선택)</Text>
            <Text size="small">{newCard.owner.length} / 30</Text>
          </FormGroupLabel>
          <Input
            maxCount={30}
            value={newCard.owner}
            onChange={handleChangeNewCardField('owner')}
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
            onFocus={() => setShowBackface(true)}
            onBlur={() => setShowBackface(false)}
          />
          <Text size="small" color="warning">
            {validationResult.cvc}
          </Text>
        </FormGroup>

        <FormGroup>
          <Text size="small">카드 비밀번호</Text>
          <CardPasswordInput
            value={newCard.password}
            onChange={handleChangeNewCardField('password')}
          />
          <Text size="small" color="warning">
            {validationResult.password}
          </Text>
        </FormGroup>

        <ButtonGroup>
          <Button onClick={handleClickNextButton}>다음</Button>
        </ButtonGroup>
      </Content>
    </Page>
  );
};
