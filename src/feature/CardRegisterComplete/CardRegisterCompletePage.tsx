import styled from 'styled-components';
import Button from '../../common/components/Button';
import checkIconImg from './assets/Group 54.png';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import type { CardFormInfoType } from '../../domain/card/types/card';
import { getCardCompanyName } from '../../domain/card/utils/cardDisplay';

const CardRegisterCompletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cardFormInfo = location.state as CardFormInfoType | null;

  // cardFormInfo가 존재하지 않는 경우 등록 페이지로 보내기
  if (cardFormInfo === null) {
    return <Navigate to="/register" replace />;
  }

  const handleConfirmClick = () => {
    navigate('/register');
  };

  const firstCardNumber = cardFormInfo.cardNumbers[0];
  const cardCompanyName = getCardCompanyName(cardFormInfo.cardCompanyId);

  return (
    <Wrapper>
      <Container>
        <Content>
          <CheckIcon src={checkIconImg} alt="" />
          <CheckDescription>
            {firstCardNumber}로 시작하는
            <br />
            {cardCompanyName}가 등록되었어요.
          </CheckDescription>
          <CheckButton onClick={handleConfirmClick}>확인</CheckButton>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  background-color: #d3d3d3;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 376px;
  height: 700px;

  background-color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 0 24px;
`;

const CheckIcon = styled.img`
  width: 76px;
  height: 76px;
`;

const CheckDescription = styled.p`
  margin-top: 48px;

  color: #333d4b;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
`;

const CheckButton = styled(Button)`
  margin-top: 44px;

  border-radius: 4px;
`;

export default CardRegisterCompletePage;
