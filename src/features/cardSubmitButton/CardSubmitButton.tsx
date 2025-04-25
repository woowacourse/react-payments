import Button from "../../shared/button/Button";
import { CardTypeList } from "../../types/index.types";
import { StyledButtonContainer, StyledEmpty } from "./CardSubmitButton.css";
import { useNavigate } from "react-router-dom";

type CardSubmitButtonProps = {
  cardType: keyof CardTypeList | "";
  firstCardNumber: string;
};

export default function CardSubmitButton({
  cardType,
  firstCardNumber,
}: CardSubmitButtonProps) {
  const navigate = useNavigate();

  const submitCardInfo = () => {
    navigate("/complete", { state: { cardType, firstCardNumber } });
  };

  return (
    <>
      <StyledEmpty />
      <StyledButtonContainer onClick={submitCardInfo}>
        <Button text="확인" />
      </StyledButtonContainer>
    </>
  );
}
