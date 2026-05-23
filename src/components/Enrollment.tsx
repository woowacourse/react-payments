import { useNavigate, useLocation, Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import { FaCheckCircle } from "react-icons/fa";
import { options } from "../hooks/useCardBrand";

export default function Enrollment() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cardNumber, issuerCode } = location.state || {};
  const displayedCardNumber = cardNumber?.substring(0, 4) ?? "";
  const matchedCardBrand = options.find(
    (option) => option.issuerCode === issuerCode,
  );
  const displayedBrand = matchedCardBrand
    ? matchedCardBrand.brand
    : "알 수 없는 카드";

  const handleClick = () => {
    navigate("/react-payments/");
  };

  if (!cardNumber || !issuerCode) {
    return <Navigate to="/react-payments/" replace />;
  }

  return (
    <Wrapper>
      <CheckIcon />
      <Phrase>
        <span>{displayedCardNumber}로 시작하는</span>
        <span>{displayedBrand}가 등록되었어요.</span>
      </Phrase>
      <Button onClick={() => handleClick()}>확인</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  width: 376px;
  height: 750px;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckIcon = styled(FaCheckCircle)`
  width: 76px;
  height: 76px;
`;

const Phrase = styled.p`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-weight: 700;
  font-size: 25px;
  line-height: 100%;
  color: rgba(53, 60, 73, 1);
  text-align: center;

  span {
    margin: 0px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: rgba(51, 51, 51, 1);
  font-weight: 700;
  font-size: 15px;
  line-height: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;
