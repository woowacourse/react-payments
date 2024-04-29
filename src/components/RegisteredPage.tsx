import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import CheckWithCircle from "../../src/assets/CheckWithCircle.png";

const RegisteredPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const clickOKButtonHandler = () => {
    navigate("/");
  };

  return (
    <RegisteredPageWrapper>
      <img src={CheckWithCircle}></img>
      <RegisteredMessageWrapper>
        {`${location.state.cardNumber}로 시작하는`}
        <br></br>
        {`${location.state.cardCompany}가 등록되었어요.`}
      </RegisteredMessageWrapper>
      <OKButton onClick={clickOKButtonHandler}>확인</OKButton>
    </RegisteredPageWrapper>
  );
};

export default RegisteredPage;

const RegisteredPageWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

const RegisteredMessageWrapper = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  width: 315px;
`;

const OKButton = styled.button`
  width: 315px;
  height: 50px;
  background-color: #333333;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
