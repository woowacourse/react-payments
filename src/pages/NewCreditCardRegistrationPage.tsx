import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from '../components/common/Page';
import { usePayments } from '../hooks/usePayments';
import { usePaymentsForm } from '../hooks/usePaymentsForm';

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  flex: 1;
`;

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const NewCreditCardRegistrationPage = () => {
  const navigate = useNavigate();
  const { validatedCreditCard: creditCard } = usePaymentsForm();
  const { creditCards, setCreditCards } = usePayments();

  if (creditCard === null) {
    throw {
      message: `올바르지 않은 신용카드 데이터입니다. (${JSON.stringify(creditCard)})`,
    };
  }

  useEffect(() => {
    delay(2000).then(() => {
      setCreditCards([...creditCards, creditCard]);
      navigate('/complete');
    });
  }, []);

  return (
    <Page>
      <Content>카드를 등록중입니다 ...</Content>
    </Page>
  );
};
