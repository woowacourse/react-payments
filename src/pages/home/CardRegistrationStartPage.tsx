import { useNavigate } from "react-router";
import styles from "./CardRegistrationStartPage.module.css";

function CardRegistrationStartPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.cardIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
            <path
              d="M6 16H10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={styles.messageContainer}>
          <h1 className={styles.title}>카드 등록</h1>
          <p className={styles.description}>
            카드를 등록하고 다양한 혜택을 받아보세요.
          </p>
        </div>

        <button
          className={styles.registerButton}
          onClick={() => navigate("/add-card")}
        >
          카드 등록하러 가기
        </button>
      </div>
    </div>
  );
}

export default CardRegistrationStartPage;
