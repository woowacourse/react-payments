import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CompletedCheck from '../assets/images/completed_check.svg?react';
import CompletedButton from '../components/CompletedButton';

const CardRegisterCompletedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  return (
    <RegisterLayout>
      {data && (
        <CompletedTextWrapper>
          <CheckImageWrapper>
            <CompletedCheck />
          </CheckImageWrapper>
          <RegisterText>
            {data.cardNumber}로 시작하는
            <br />
            {data.cardCompany}가 등록되었어요.
          </RegisterText>
          <CompletedButton onClick={() => navigate(-1)}>확인</CompletedButton>
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

const CheckImageWrapper = styled.div`
  #check-mark {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    animation: draw 1s forwards;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default CardRegisterCompletedPage;
