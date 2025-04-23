import Button from "../../shared/button/Button";
import { StyledButtonContainer, StyledEmpty } from "./CardSubmitButton.css";

export default function CardSubmitButton() {
  return (
    <>
      <StyledEmpty />
      <StyledButtonContainer>
        <Button text="확인" />
      </StyledButtonContainer>
    </>
  );
}
