import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Check from '../assets/image/check.png';
import styled from 'styled-components';
import { Page } from '../style/page.style';

export default function SucceedSubmit() {
  const location = useLocation();
  const { cardNumbers, cardCompany } = location.state.cardInfo;

  return (
    <CenterPage>
      <Container>
        <Img src={Check} alt="check" />
        <TextBox>
          {cardNumbers.cardNumber1}로 시작하는 <br />
          {cardCompany.name}가 등록되었어요.
        </TextBox>
        <Link to="/">
          <Button>확인</Button>
        </Link>
      </Container>
    </CenterPage>
  );
}

const CenterPage = styled(Page)`
  height: 100vh;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const TextBox = styled.div`
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

const Img = styled.img`
  width: 75px;
`;

const Button = styled.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background-color: #333333;
  color: white;
  font-size: 16px;
`;
