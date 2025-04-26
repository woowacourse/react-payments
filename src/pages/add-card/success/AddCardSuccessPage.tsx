import { PAGE_URL } from "@/constants/pageUrl";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "./AddCardSuccessPage.module.css";
import CheckIcon from "@/components/CheckIcon/CheckIcon";

function AddCardSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      navigate(PAGE_URL.HOME);
    }
  }, []);

  const handleCheckButtonClick = () => {
    navigate(PAGE_URL.ADD_CARD);
  };

  return (
    <div className={styles.container}>
      <CheckIcon fill="#007bff" />
      <div className={styles.textBox}>
        <p>{location.state?.firstCardNumber}로 시작하는</p>
        <p>{location.state?.cardType}가 등록되었어요.</p>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={handleCheckButtonClick}
      >
        확인
      </button>
    </div>
  );
}

export default AddCardSuccessPage;
