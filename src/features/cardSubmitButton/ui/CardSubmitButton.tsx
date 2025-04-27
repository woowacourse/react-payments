import Button from "../../../shared/button/Button";
import { CardTypeList } from "../../../shared/types/index.types";
import {
  StyledButtonContainer,
  StyledEmpty,
} from "../css/CardSubmitButton.css";
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
