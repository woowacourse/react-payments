import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowDownIcon } from '../assets/common/arrow-down.svg';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Page } from '../components/common/Page';
import { Text } from '../components/common/Text';
import { CardCVCInput } from '../components/payments/CardCVCInput';
import { CardNumberInput } from '../components/payments/CardNumberInput';
import { CardPasswordInput } from '../components/payments/CardPasswordInput';
import { CreditCardView } from '../components/payments/CreditCardView';
import { ExpirationDateInput } from '../components/payments/ExpirationDateInput';
import { VendorIcon } from '../components/payments/VendorIcon';
import type { CreditCard } from '../domain/CreditCard';
import { CREDIT_CARD_VENDOR_BRAND_COLORS } from '../domain/CreditCardBrandColors';
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

  position: relative;

  width: 100%;
  margin: 10px 0px;
  margin-bottom: 24px;
  padding-bottom: 8px;
`;

const FormGroupLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormGroupErrorMessage = styled.div`
  position: absolute;
  top: 100%;

  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.fontColor.warning};
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

  const { creditCards, setCreditCards, assignCreditCardId, recommendCreditCardDisplayName } =
    usePayments();

  const [newCard, setNewCard] = useState<Omit<CreditCard, 'id'>>({
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
      id: assignCreditCardId(),
      displayName: recommendCreditCardDisplayName(newCard.owner),
    };

    if (!validate(newCardWithDisplayName)) return;

    setCreditCards([...creditCards, newCardWithDisplayName]);
    navigate(`/complete?id=${newCardWithDisplayName.id}`);
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
          color={CREDIT_CARD_VENDOR_BRAND_COLORS[newCard.vendor]}
          icon={<VendorIcon vendor={newCard.vendor} />}
          showBackface={showBackface}
        />

        <FormGroup>
          <Text size="small">카드 번호</Text>
          <CardNumberInput
            value={newCard.cardNumbers}
            onChange={handleChangeNewCardField('cardNumbers')}
          />
          <FormGroupErrorMessage>{validationResult.cardNumbers}</FormGroupErrorMessage>
        </FormGroup>

        <FormGroup>
          <Text size="small">만료일</Text>
          <ExpirationDateInput
            value={newCard.expirationDate}
            onChange={handleChangeNewCardField('expirationDate')}
          />
          <FormGroupErrorMessage>{validationResult.expirationDate}</FormGroupErrorMessage>
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
          <Text size="small">보안 코드(CVC/CVV)</Text>
          <CardCVCInput
            value={newCard.cvc}
            onChange={handleChangeNewCardField('cvc')}
            onFocus={() => setShowBackface(true)}
            onBlur={() => setShowBackface(false)}
            helperTooltip
          />
          <FormGroupErrorMessage>{validationResult.cvc}</FormGroupErrorMessage>
        </FormGroup>

        <FormGroup>
          <Text size="small">카드 비밀번호</Text>
          <CardPasswordInput
            value={newCard.password}
            onChange={handleChangeNewCardField('password')}
          />
          <FormGroupErrorMessage>{validationResult.password}</FormGroupErrorMessage>
        </FormGroup>

        <ButtonGroup>
          <Button onClick={handleClickNextButton}>다음</Button>
        </ButtonGroup>
      </Content>
    </Page>
  );
};
