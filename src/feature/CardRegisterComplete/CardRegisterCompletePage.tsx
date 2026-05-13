import {useNavigate, useLocation, Navigate} from 'react-router-dom';
import styled from 'styled-components';

import type {CardRegisterCompleteState} from './routeState.types';

const CardRegisterCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as CardRegisterCompleteState | null;

  // complete 페이지 진입 시 state가 없으면, 메인으로 redirect하고 히스토리를 덮어써서 뒤로가기를 방지함
  if (!state) return <Navigate to='/' replace />;

  return (
    <Wrapper>
      <Content>
        <CheckIcon src='/images/complete_check_icon.png' alt='완료' />
        <Message>
          {state.cardPrefix}로 시작하는
          <br />
          {state.companyName}가 등록되었어요.
        </Message>
        <ConfirmButton onClick={() => navigate('/')}>확인</ConfirmButton>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: 0 16px;
  gap: 32px;
  overflow-y: auto;
`;

const CheckIcon = styled.img`
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
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 42px;
  padding: 16px;
  background-color: #333333;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export default CardRegisterCompletePage;
