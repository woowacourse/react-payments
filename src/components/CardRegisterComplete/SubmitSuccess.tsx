import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface SubmitSuccessprops {
  firstNumberSegment: string;
  cardCompany: string;
}

const CheckImage = styled.img`
  width: 76;
  height: 76;
  top: 188px;
  left: 150px;
  angle: 0 deg;
  opacity: 1;
`;

const Message = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #353c49;
  text-align: center;
  line-height: 100%;
  margin: 0;
`;

const ConfirmButton = styled.button`
  width: 100%;
  height: 52px;
  background: #333333;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 100vh;
  padding: 16px 32px;
  max-width: 376px;
  margin: 0 auto;
`;

export function SubmitSuccess(props: SubmitSuccessprops) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/react-payments/");
  };

  return (
    <Wrapper>
      <CheckImage src={`${import.meta.env.BASE_URL}check.png`} />
      <Message>
        {props.firstNumberSegment}로 시작하는
        <br />
        {props.cardCompany}가 등록되었어요.
      </Message>
      <ConfirmButton onClick={handleClick}>확인</ConfirmButton>
    </Wrapper>
  );
}
