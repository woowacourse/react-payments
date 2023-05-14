import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Page } from '../components/common/Page';
import { CreditCardView } from '../components/payments/CreditCardView';
import { VendorIcon } from '../components/payments/VendorIcon';
import { CREDIT_CARD_VENDOR_BRAND_COLORS } from '../domain/CreditCardBrandColors';
import { usePayments } from '../hooks/usePayments';
import { usePaymentsForm } from '../hooks/usePaymentsForm';

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 28px;
  padding-top: 130px;

  flex: 1;
`;

const Title = styled.h1`
  margin-bottom: 36px;

  font-size: ${(props) => props.theme.fontSize.xxlarge};
`;

const FormGroup = styled.div`
  margin-top: 124px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  margin-top: auto;
`;

export const NewCreditCardCompletionPage = () => {
  const navigate = useNavigate();
  const { updateCreditCard, getCreditCardById, recommendCreditCardDisplayName } = usePayments();
  const { validatedCreditCard } = usePaymentsForm();

  const creditCard = validatedCreditCard ? getCreditCardById(validatedCreditCard.id) : null;
  if (creditCard === null) {
    throw {
      message: `올바르지 않은 신용카드 데이터입니다. (${JSON.stringify(creditCard)})`,
    };
  }

  const [displayName, setDisplayName] = useState(recommendCreditCardDisplayName(creditCard.owner));

  const handleClickConfirm = () => {
    updateCreditCard({ ...creditCard, displayName });
    navigate('/');
  };

  return (
    <Page>
      <Content>
        <Title>카드등록이 완료되었습니다.</Title>

        <CreditCardView
          cardNumbers={creditCard.cardNumbers}
          owner={creditCard.owner}
          expirationDate={creditCard.expirationDate}
          vendor={creditCard.vendor}
          color={CREDIT_CARD_VENDOR_BRAND_COLORS[creditCard.vendor]}
          icon={<VendorIcon vendor={creditCard.vendor} />}
        />

        <FormGroup>
          <Input
            value={displayName}
            onChange={setDisplayName}
            variant="underlined"
            width={24}
            center
          />
        </FormGroup>

        <ButtonGroup>
          <Button onClick={handleClickConfirm}>확인</Button>
        </ButtonGroup>
      </Content>
    </Page>
  );
};
