import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../../contexts/CardContext";
import { forwardRef } from "react";
import { ROUTE } from "../../constants/route";

type ButtonProps = {
  name: "register" | "another";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ name }, ref) => {
  const navigate = useNavigate();
  const { resetCardForm, setIsSubmitted } = useCardContext();

  const handleRegisterCard = () => {
    navigate(ROUTE.CARD_REGISTER.COMPLETE);
    setIsSubmitted(true);
  };

  const handleRegisterAnotherCard = () => {
    resetCardForm();

    navigate(ROUTE.HOME);
    location.reload();
    setIsSubmitted(false);
  };

  return (
    <button
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
      ref={ref}
    >
      확인
    </button>
  );
});

export default Button;
