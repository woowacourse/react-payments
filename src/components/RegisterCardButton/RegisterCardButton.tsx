import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../../contexts/CardContext";
import { ROUTE } from "../../constants/route";

const RegisterCardButton = () => {
  const navigate = useNavigate();
  const { setIsSubmitted } = useCardContext();

  const handleRegister = () => {
    setIsSubmitted(true);
    navigate(ROUTE.CARD_REGISTER.COMPLETE);
  };

  return (
    <Button variant="register" onClick={handleRegister}>
      확인
    </Button>
  );
};

export default RegisterCardButton;
