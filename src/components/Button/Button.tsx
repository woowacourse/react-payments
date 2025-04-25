import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../../contexts/CardContext";

type ButtonProps = {
  name: "register" | "another";
};

const Button = ({ name }: ButtonProps) => {
  const navigate = useNavigate();
  const { resetCardForm } = useCardContext();

  const handleRegisterAnotherCard = () => {
    resetCardForm();
    navigate("/");
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
          ? () => navigate("/card/register/complete")
          : () => handleRegisterAnotherCard()
      }
    >
      확인
    </button>
  );
};

export default Button;
