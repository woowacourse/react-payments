import { CompleteText, Container, Img } from "./RegisterComplete.styled";
import check from '../../asset/check.svg';
import PaymentsButton from "../../components/common/PaymentsButton/PaymentsButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegisterComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardInfo = location.state

  useEffect(() => {
    if (cardInfo === null) {
      navigate('/');
    }
  }, [cardInfo, navigate]);

  const message = `${cardInfo.cardNumbers.value[0]}로 시작하는
    ${cardInfo.cardCompany.value}가 등록되었어요.`;

  const navigateToRegister = () => {
    navigate('/');
  };

  return (
    <Container>
      <Img src={check} />
      <CompleteText>
        {message}
      </CompleteText>
      <PaymentsButton onClick={navigateToRegister} text="확인" />
    </Container>
  )
}

export default RegisterComplete;