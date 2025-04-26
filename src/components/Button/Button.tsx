import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../../contexts/CardContext";
import { forwardRef } from "react";

type ButtonProps = {
  name: "register" | "another";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ name }, ref) => {
  const navigate = useNavigate();
  const { resetCardForm, setIsSubmitted } = useCardContext();

  const handleRegisterCard = () => {
    navigate("/card/register/complete");
    setIsSubmitted(true);
  };

  const handleRegisterAnotherCard = () => {
    resetCardForm();

    navigate("/");
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
