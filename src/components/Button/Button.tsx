import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  name: "register" | "another";
};

const Button = ({ name }: ButtonProps) => {
  const navigate = useNavigate();

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
          : () => navigate("/")
      }
    >
      확인
    </button>
  );
};

export default Button;
