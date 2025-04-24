import Button from "@/components/Button/Button";
import { useLocation, useNavigate } from "react-router";
import styles from "./AddCardCompleteModal.module.css";
import RoundCheckIcon from "@/components/RoundCheckedIcon/RoundCheckedIcon";

function AddCardCompleteModal() {
  const location = useLocation();
  const navigate = useNavigate();

  const { firstCardNumber, selectedBrand } = location.state || {};

  function handleAddCardConfirmButton() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <RoundCheckIcon size="large" />
        <p className={styles.details}>
          <span className={styles.detailsSpan}>
            {firstCardNumber}로 시작하는
          </span>
          <span className={styles.detailsSpan}>
            {selectedBrand === "카카오뱅크"
              ? selectedBrand + " 카드"
              : selectedBrand}
            가 등록되었어요!
          </span>
        </p>
        <Button
          size="large"
          onClick={handleAddCardConfirmButton}
          variant="rounded"
          fullWidth={true}
        >
          확인
        </Button>
      </div>
    </div>
  );
}

export default AddCardCompleteModal;
