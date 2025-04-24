import styles from "./RegisterCardButton.module.css";
import { useNavigate } from "react-router-dom";

const RegisterCardButton = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/card/register/complete");
  };

  return (
    <button
      type="button"
      className={styles.registerCardButton}
      onClick={handleRegister}
    >
      확인
    </button>
  );
};

export default RegisterCardButton;
