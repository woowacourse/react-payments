import styled from 'styled-components';
import Button from '../component/Button';
import { slideDown } from '../animation/animation';
import { useNavigate } from 'react-router-dom';
const Success = () => {
  const navigate = useNavigate();

  const storedCardNumber = sessionStorage.getItem('firstCardNumber');
  const storedCardBrand = sessionStorage.getItem('cardBrand');

  const cardNumber = storedCardNumber ? JSON.parse(storedCardNumber) : null;
  const brand = storedCardBrand ? JSON.parse(storedCardBrand) : null;

  if (!cardNumber || !brand) {
    return <Message>오류가 발생했어요! 다시 시도해 주세요.</Message>;
  }

  return (
    <Container>
      <Icon src="./checkIcon.png" />
      <Message>
        {cardNumber}로 시작하는 <br />
        {brand}가 등록되었어요
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
