import styled from '@emotion/styled';
import completeIcon from '../assets/complete.svg';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Common/Button/Button';

export default function RegistrationCompletionPage() {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  if (!state) return <Navigate to="/registration" />;

  return (
    <Container>
      <IconWrapper>
        <img src={completeIcon} alt="complete-icon" />
      </IconWrapper>

      <CompletedMessage>
        {`${state.prefix}로 시작하는`}
        <br />
        {`${state.cardIssuer}가 등록되었어요.`}
      </CompletedMessage>

      <Button onClick={() => navigate('/registration')}>확인</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompletedMessage = styled.p`
  height: 100px;
  font-size: 25px;
  font-weight: 700;
  color: #353c49;
  text-align: center;
`;
