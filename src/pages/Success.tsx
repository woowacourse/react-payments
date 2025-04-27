import styled from 'styled-components';
import Button from '../component/Button';
import { slideDown } from '../animation/animation';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { cardFirstNumber, cardBrand } = location.state || {};

  if (!cardFirstNumber || !cardBrand) {
    return <Message>오류가 발생했어요! 다시 시도해 주세요.</Message>;
  }

  return (
    <Container>
      <Icon src="./checkIcon.png" />
      <Message>
        {cardFirstNumber}로 시작하는 <br />
        {cardBrand}가 등록되었어요
      </Message>
      <Button text="확인" handleClick={() => navigate('/')} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideDown} 0.5s ease-in-out;
  font-size: var(--font-size-header);
  font-weight: var(--font-weight-header);
  gap: 24px;
`;
const Icon = styled.img`
  width: 76px;
`;
const Message = styled.p`
  text-align: center;
  line-height: 28px;
`;

export default Success;
