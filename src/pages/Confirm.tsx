import styled from 'styled-components';
import { Wrap } from './AddCard';
import { useNavigate } from 'react-router-dom';

const CheckMarKContainer = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  margin-top: 188px;
  margin-bottom: 25px;
`;

const ConfirmTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConfirmText = styled.div`
  font-size: 25px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.2;
`;

const ContirmButton = styled.button`
  width: 320px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 15px;
  margin-bottom: 242px;
`;

export const Confirm = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <CheckMarKContainer src="./checkmark.png" alt="check" />
      <ConfirmTextContainer>
        <ConfirmText>5511로 시작하는</ConfirmText>
        <ConfirmText>BC카드가 등록되었어요.</ConfirmText>
      </ConfirmTextContainer>
      <ContirmButton onClick={() => navigate('/')}>확인</ContirmButton>
    </Wrap>
  );
};
