import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../../contexts/CardContext";

type ButtonProps = {
  name: "register" | "another";
};

const Button = ({ name }: ButtonProps) => {
  const navigate = useNavigate();
  const { resetCardForm, setIsSubmitted } = useCardContext();

  const handleRegisterCard = () => {
    navigate("/card/register/complete");
    setIsSubmitted(true);
  }

  const handleRegisterAnotherCard = () => {
    resetCardForm();
    
    navigate("/");
    location.reload();
    setIsSubmitted(false);
  }

  return (
    <button
      type="button"
      className={
        name === "register"
          ? styles.registerCardButton
          : styles.registerAnotherCardButton
      }
      onClick={
        name === "register"
          ? () => handleRegisterCard()
          : () => handleRegisterAnotherCard()
      }
    >
      확인
    </button>
  );
};

export default Button;
