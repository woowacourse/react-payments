import * as Styled from "./ConfirmCardRegistration.styled";
import { useLocation, useNavigate } from "react-router-dom";
import CheckIcon from "../../assets/CheckIcon.png";

const ConfirmCardRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardFirstNumber, cardCompany } = location.state;
  const text = `${cardFirstNumber}로 시작하는
    ${cardCompany}가 등록되었어요.
  `;

  return (
    <Styled.ConfirmCardRegistrationContainer>
      <Styled.CheckIcon
        src={CheckIcon}
        alt="카드 등록 확인"
      ></Styled.CheckIcon>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Button onClick={() => navigate("/react-payments/")}>확인</Styled.Button>
    </Styled.ConfirmCardRegistrationContainer>
  );
};

export default ConfirmCardRegistration;
