import styled from 'styled-components';
import Button from '../../components/ui/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function AddCardComplete() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate(ROUTES.CARD_NEW);
  };

  const { cardNumber, cardIssuer } = location.state;
  return (
    <AddCardLayout>
      <AddCardCompleteContainer>
        <CheckIcon src="/react-payments/img/check-filled.png" />
        <SuccessMessage>
          {`${cardNumber}로 시작하는`}
          <br />
          {` ${cardIssuer}가 등록되었어요.`}
        </SuccessMessage>
        <Button
          isFocused={true}
          buttonText="확인"
          buttonType="default"
          onClick={handleRestart}
          type="button"
        />
      </AddCardCompleteContainer>
    </AddCardLayout>
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

const AddCardCompleteContainer = styled.div`
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

const AddCardLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default AddCardComplete;
