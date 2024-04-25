import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CompletedCheck from '../assets/images/completed_check.svg?react';

const CardRegisterCompletedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  return (
    <RegisterLayout>
      {data && (
        <CompletedTextWrapper>
          <CompletedCheck />
          <RegisterText>
            {data.cardNumber}로 시작하는
            <br />
            {data.cardCompany}가 등록되었어요.
          </RegisterText>
          <StyledButton onClick={() => navigate(-1)}>확인</StyledButton>
        </CompletedTextWrapper>
      )}
    </RegisterLayout>
  );
};

const RegisterLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const RegisterText = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #353c49;
  text-align: center;
  line-height: 36px;
`;

const CompletedTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: #333333;
  color: #f3f3f3;
  font-weight: 700;
  font-size: 16px;
  bottom: 0;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: lightgray;
  }
`;

export default CardRegisterCompletedPage;
