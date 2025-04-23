import styled from 'styled-components';
import Button from '../components/button/Button';

const Confirm = () => {
  return (
    <Container>
      <img src="./images/checkIcon.png" alt="체크표시" />
      <Description>
        5111로 시작하는
        <br />
        BC카드가 등록되었어요.
      </Description>
      <Button onClick={() => {}}>확인</Button>
    </Container>
  );
};

export default Confirm;

const Container = styled.div`
  width: 376px;
  padding: 77px 30px 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Description = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;
