import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const CardCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardNumber, cardCompany } = location.state || {};

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <StyledCardCompletePage>
      <StyledIcon src="/check.png" />
      <StyledTitle>
        {cardNumber[0]}로 시작하는 <br />
        {cardCompany}가 등록되었어요.
      </StyledTitle>

      <Button style={{ borderRadius: '8px' }} onClick={handleBackToHome}>
        확인
      </Button>
    </StyledCardCompletePage>
  );
};

export default CardCompletePage;

const StyledIcon = styled.img`
  width: 76px;
  height: 76px;
  margin: 20px;
`;

const StyledCardCompletePage = styled.div`
  width: 40%;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #353c49;
  margin-bottom: 30px;
  text-align: center;
`;
