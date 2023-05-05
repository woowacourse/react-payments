import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Page } from '../components/common/Page';
import { CreditCardView } from '../components/payments/CreditCardView';
import { VendorIcon } from '../components/payments/VendorIcon';
import { CREDIT_CARD_VENDOR_BRAND_COLORS } from '../domain/CreditCardBrandColors';
import { usePayments } from '../hooks/usePayments';

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

export const NewCreditCardDisplayNamePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getCreditCardById, updateCreditCard } = usePayments();

  const id = searchParams.get('id');
  const creditCard = getCreditCardById(Number(id));

  if (!creditCard) {
    throw {
      message: `존재하지 않는 신용카드입니다. (id=${id})`,
    };
  }

  const [displayName, setDisplayName] = useState(creditCard.displayName);

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
