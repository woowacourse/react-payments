import Button from "../../../shared/button/ui/Button";
import {
  StyledButtonContainer,
  StyledEmpty,
} from "../css/CardSubmitButton.css";
import { CardTypes } from "../../../shared/types/index.types";
import { useNavigate } from "react-router-dom";

type CardSubmitButtonProps = {
  cardType: CardTypes | "";
  firstCardNumber: string;
};

export default function CardSubmitButton({
  cardType,
  firstCardNumber,
}: CardSubmitButtonProps) {
  const navigate = useNavigate();

  const submitCardInfo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
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
