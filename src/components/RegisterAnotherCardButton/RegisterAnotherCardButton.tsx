import Button from "../Button/Button";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../../contexts/CardContext";
import { ROUTE } from "../../constants/route";

const RegisterAnotherCardButton = forwardRef<HTMLButtonElement>((_, ref) => {
  const navigate = useNavigate();
  const { resetCardForm, setIsSubmitted } = useCardContext();

  const handleRegisterAnotherCard = () => {
    resetCardForm();
    setIsSubmitted(false);
    navigate(ROUTE.HOME);
    location.reload();
  };

  return (<Button variant="another" onClick={handleRegisterAnotherCard} ref={ref}>확인</Button>)
});

export default RegisterAnotherCardButton;
