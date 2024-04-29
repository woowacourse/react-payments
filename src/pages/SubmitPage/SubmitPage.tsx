import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SubmitPage.module.css";

const SubmitPage = () => {
  const location = useLocation();
  const firstCardNumber = location.state?.firstCardNumber ?? "(첫 번째 카드 번호)";
  const cardCompany = location.state?.cardCompany ?? "(카드 회사명)";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkMark}>
        <div className={styles.checkMarkScreen} />
      </div>
      <div className={styles.confirmMessage}>
        <span>{firstCardNumber}로 시작하는</span>
        <span>{cardCompany}가 등록되었어요.</span>
      </div>
      <button autoFocus className={styles.confirmButton} onClick={handleClick}>
        확인
      </button>
    </div>
  );
};

export default SubmitPage;
