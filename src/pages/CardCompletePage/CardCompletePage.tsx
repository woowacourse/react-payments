import styled from '@emotion/styled';
import Button from '../../components/Button/Button';
import { useCardRouter } from '../../hooks/useCardRouter';

const CardCompletePage = () => {
  const { cardInfo, navigateToHome } = useCardRouter();
  const { cardNumber, cardCompany } = cardInfo;

  return (
    <StyledCardCompletePage>
      <StyledIcon src="/check.png" />
      <StyledTitle>
        {cardNumber && cardNumber[0]}로 시작하는 <br />
        {cardCompany}가 등록되었어요.
      </StyledTitle>

      <Button style={{ borderRadius: '8px' }} onClick={navigateToHome}>
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
