import styles from "./RegisterAnotherCardButton.module.css";
import { useNavigate } from "react-router-dom";

const RegisterAnotherCardButton = () => {
  const navigate = useNavigate();

  const handleRegisterAnotherCard = () => {
    navigate("/");
  };

  return (
    <button
      type="button"
      className={styles.registerAnotherCardButton}
      onClick={handleRegisterAnotherCard}
    >
      확인
    </button>
  );
};

export default RegisterAnotherCardButton;
