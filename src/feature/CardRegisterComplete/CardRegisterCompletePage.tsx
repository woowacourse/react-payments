import {useNavigate, useLocation, Navigate} from 'react-router-dom';
import styled from 'styled-components';

import Button from '@/common/components/Button/Button';
import type {CardRegisterCompleteState} from './routeState.types';

// complete 페이지에서 사용할 route state 형식 확인
const isCardRegisterCompleteState = (state: unknown): state is CardRegisterCompleteState => {
  const completeState = state as CardRegisterCompleteState;

  return typeof completeState?.cardPrefix === 'string' && typeof completeState?.companyName === 'string';
};

const CardRegisterCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  // complete 페이지 진입 시 state가 유효하지 않으면 메인으로 redirect
  if (!isCardRegisterCompleteState(state)) return <Navigate to='/cards' replace />;

  return (
    <Wrapper>
      <Content>
        <CheckIcon src='/images/complete_check_icon.png' alt='완료' />
        <Message>
          {state.cardPrefix}로 시작하는
          <br />
          {state.companyName}가 등록되었어요.
        </Message>
        <ConfirmButton onClick={() => navigate('/cards')}>확인</ConfirmButton>
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

const ConfirmButton = styled(Button).attrs({variant: 'primary'})`
  flex-shrink: 0;
  width: 90%;
  height: 42px;
  padding: 16px;
  border-radius: 6px;
`;

export default CardRegisterCompletePage;
