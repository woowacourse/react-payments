import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

const StyledPage = styled.div`
  width: 40%;
  min-width: 400px;
  min-height: 100vh;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 76px;
  height: 76px;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const RegisterSuccess = () => {
  const navigate = useNavigate();

  const navigateToCardPage = () => {
    navigate(`/`);
  };

  const location = useLocation();
  const cardNumber = location.state.cardNumber;
  const cardCompany = location.state.cardCompany;

  return (
    <StyledPage>
      <StyledImage src="./success.png"></StyledImage>
      <StyledTextWrapper>
        <Text type="title" text={`${cardNumber}로 시작하는`}></Text>
        <Text type="title" text={`${cardCompany}가 등록되었어요.`}></Text>
      </StyledTextWrapper>
      <Button text="확인" onClick={navigateToCardPage}></Button>
    </StyledPage>
  );
};

export default RegisterSuccess;
