import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

const BackButton = () => {
  const navigete = useNavigate();

  return (
    <button 
      className={styles.button}
      type="button"
      onClick={() => navigete(-1)}
    >
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.30425 1L1.36475 8.78658L9.15133 15.7261"
          stroke="#525252"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};

export default BackButton;
