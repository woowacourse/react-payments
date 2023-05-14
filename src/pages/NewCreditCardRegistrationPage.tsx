import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Page } from '../components/common/Page';
import { Text } from '../components/common/Text';
import { usePayments } from '../hooks/usePayments';
import { usePaymentsForm } from '../hooks/usePaymentsForm';

const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 42px;

  flex: 1;
`;

const Progress = styled.div`
  display: flex;
  justify-content: center;
  width: 170px;
  height: 100px;

  border-radius: 10px;
  background-color: #d9d9d9;

  overflow: hidden;
`;

const ProgressBarAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
`;

const ProgressBar = styled.div`
  width: 50%;
  height: 100%;

  border-radius: 10px;
  background-color: #333333;

  animation-name: ${ProgressBarAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
`;

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const NewCreditCardRegistrationPage = () => {
  const navigate = useNavigate();
  const { registerCreditCard } = usePayments();
  const { creditCard, setCreditCard, validate } = usePaymentsForm();

  if (creditCard === null) {
    throw {
      message: `올바르지 않은 신용카드 데이터입니다. (${JSON.stringify(creditCard)})`,
    };
  }

  useEffect(() => {
    delay(2000).then(() => {
      if (!validate(creditCard)) {
        throw {
          message: `올바르지 않은 신용카드 데이터입니다. (${JSON.stringify(creditCard)})`,
        };
      }
      const registeredCreditCard = registerCreditCard(creditCard);
      setCreditCard(registeredCreditCard);

      navigate('/complete');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <Content>
        <Progress>
          <ProgressBar />
        </Progress>

        <Text size="medium" weight="bold">
          카드를 등록중입니다
        </Text>
      </Content>
    </Page>
  );
};
