import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { cardCompanyOptions } from '../constants/cardCompanyOptions';
import Check from '../assets/Check.svg';
import styled from '@emotion/styled';

export function RegistrationComplete() {
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state) return <Navigate to="/react-payments" replace />;
  const { firstDigits, cardCompany } = location.state;
  const cardCompanyLabel = cardCompanyOptions.find((option) => option.value === cardCompany)?.label;

  return (
    <Container>
      <img src={Check} alt={'체크 사진'}></img>
      <Heading>
        <span>{firstDigits}로 시작하는</span>
        <span>{cardCompanyLabel}가 등록되었어요.</span>
      </Heading>
      <Button
        onClick={() => {
          navigate('/react-payments');
        }}
      >
        확인
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 7rem 0 7rem;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  box-sizing: border-box;
  padding: 1.5625rem 0 1.5625rem 0;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  background-color: #333333;
  cursor: pointer;
`;
