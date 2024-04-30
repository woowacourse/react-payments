import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button/common";
import Icon from "../../components/icon";

const SuccessRegistration = () => {
  const location = useLocation();
  const router = useNavigate();
  const { selectedCard, cardNumber } = location.state;

  if (!selectedCard || !cardNumber) router("/");

  return (
    <Container>
      <CheckBoxWrapper>
        <Icon kind="checkBox" />
      </CheckBoxWrapper>
      <SuccessText>{`${cardNumber}로 시작하는`}</SuccessText>
      <SuccessText>{`${selectedCard}가 등록되었어요.`}</SuccessText>
      <Button
        content="확인"
        onClick={() => router("/")}
        styles={{ borderRadius: "5px", marginTop: "30px" }}
      />
    </Container>
  );
};

export default SuccessRegistration;

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 350px;
  padding: 15% 5%;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10%;
`;

const SuccessText = styled.h1`
  text-align: center;
  font-size: 25px;
  line-height: 36.2px;
  font-weight: bold;
`;
