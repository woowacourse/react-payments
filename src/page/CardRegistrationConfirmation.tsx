import styled from "styled-components";
import Check from '../assets/image/check.png';
import BottomButton from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 50px;
  max-width: 400px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;
const ConfirmationMessage = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align:center;
  padding: 25px;
`

const ConfirmationImage = styled.img`
  width: 80px;
  height: 80px;

`

export default function CardRegistrationConfirmation() {
  const location = useLocation();
  const cardNumber1 = location.state.cardNumber1.value;
  const cardBrand = location.state.cardBrand.value;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }
  return ( 
  <>
    <Page>
      <Container>
        <ConfirmationImage src = {Check}/>
        <ConfirmationMessage>{`${cardNumber1}로 시작하는 ${cardBrand}가 등록되었어요`}</ConfirmationMessage>
        <BottomButton value="확인" onClick={handleClick}/>
      </Container>
    </Page>
  </>
  )
}
