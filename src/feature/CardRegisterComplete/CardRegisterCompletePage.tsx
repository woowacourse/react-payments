import {useNavigate, useLocation, Navigate} from 'react-router-dom';
import styled from 'styled-components';

type CompleteState = {
  cardPrefix: string;
  companyName: string;
};

const CardRegisterCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CompleteState | null;

  if (!state) return <Navigate to='/' replace />;

  return (
    <Wrapper>
      <CheckIcon viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='40' cy='40' r='40' fill='#333333' />
        <path
          d='M24 41 L36 53 L57 30'
          stroke='#ffffff'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
        />
      </CheckIcon>
      <Message>
        {state.cardPrefix}로 시작하는
        <br />
        {state.companyName}가 등록되었어요.
      </Message>
      <ConfirmButton onClick={() => navigate('/')}>확인</ConfirmButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 0 16px;
  gap: 32px;
`;

const CheckIcon = styled.svg`
  width: 80px;
  height: 80px;
`;

const Message = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #333333;
  text-align: center;
  line-height: 1.4;
  margin: 0;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #333333;
  color: #fff;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

export default CardRegisterCompletePage;
