import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

function Completion() {
  const location = useLocation();
  const companyName = location.state.cardCompany || '';
  const companyNameEnd = companyName.slice(-2);
  const cardType =
    companyNameEnd === '카드' ? companyName : `${companyName}카드`;

  return (
    <Container>
      <Img src="./check.png" />
      <Text>
        {location.state?.startCardNumber}로 시작하는
        <br />
        {cardType}가 등록되었어요.
      </Text>
      <Button>확인</Button>
    </Container>
  );
}

export default Completion;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 28px;
`;

const Img = styled.img`
  width: 76px;
  height: 76px;
`;

const Text = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  left: 0px;
  bottom: 0px;
  background: #333333;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
`;
