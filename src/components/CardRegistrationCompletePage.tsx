import styled from "styled-components";
import CheckImage from "../assets/Check.png";
import { useLocation, useNavigate } from "react-router-dom";

const Styled = {
  CardRegistrationCompletePageWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 40px;
    font-family: Noto Sans KR;
  `,

  CardRegistrationCompleteDisplay: styled.div`
    background: #333333;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  CheckImage: styled.img`
    content: url(${CheckImage});
  `,

  CardRegistrationMessage: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 25px;
    font-weight: 700;
    line-height: 36.2px;
  `,

  RegistrationCompleteButton: styled.button`
    background: #333333;
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    width: 320px;
    height: 44px;
    border-radius: 5px;
    border: none;
  `,
};

const CardRegistrationCompletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cardNumber = location.state.cardNumbers[0];
  const cardCompany = location.state.cardCompany;

  return (
    <Styled.CardRegistrationCompletePageWrapper>
      <Styled.CardRegistrationCompleteDisplay>
        <Styled.CheckImage />
      </Styled.CardRegistrationCompleteDisplay>
      <Styled.CardRegistrationMessage>
        <div>{cardNumber}로 시작하는</div>
        <div>{cardCompany}가 등록되었어요.</div>
      </Styled.CardRegistrationMessage>
      <Styled.RegistrationCompleteButton
        onClick={() => {
          navigate("/cardRegistrationPage");
        }}
      >
        확인
      </Styled.RegistrationCompleteButton>
    </Styled.CardRegistrationCompletePageWrapper>
  );
};

export default CardRegistrationCompletePage;
