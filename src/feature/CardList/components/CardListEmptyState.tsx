import { useNavigate } from 'react-router-dom';
import Button from '../../../common/components/Button';
import Description from '../../../common/components/Description';
import Title from '../../../common/components/Title';

import ghostImg from './../assets/Ghost_Card.png';
import styled from 'styled-components';

export const CardListEmptyState = () => {
  const navigate = useNavigate();

  const handleMoveToRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Wrapper>
      <GhostImage src={ghostImg} alt="" />
      <Title value="등록된 카드가 없습니다" />
      <Description value="아래 버튼을 눌러 첫 카드를 등록해보세요" />
      <Button value="카드 추가하기" onClick={handleMoveToRegisterClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 15px;

  width: 100%;
`;

const GhostImage = styled.img`
  border-radius: 6px;
`;

export default CardListEmptyState;
