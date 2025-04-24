import styled from 'styled-components';
import Button from '../../components/ui/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentsComplete() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate(`/payments`);
  };

  const { cardNumber, cardIssuer } = location.state;
  return (
    <PaymentsLayout>
      <PaymentsCompleteContainer>
        <CheckIcon src="/img/check-filled.png" />
        <SuccessMessage>
          {`${cardNumber}로 시작하는`}
          <br />
          {` ${cardIssuer}가 등록되었어요.`}
        </SuccessMessage>
        <Button
          buttonText="확인"
          buttonType="default"
          onClick={handleRestart}
        />
      </PaymentsCompleteContainer>
    </PaymentsLayout>
  );
}

const CheckIcon = styled.img`
  width: 76px;
`;

const SuccessMessage = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
`;

const PaymentsCompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  box-sizing: border-box;
  padding: 44px 28px;
  width: 376px;
  height: 100%;
  min-height: 100%;
  background-color: white;
  border: 1px solid lightgray;
  overflow: auto;
`;

const PaymentsLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default PaymentsComplete;
