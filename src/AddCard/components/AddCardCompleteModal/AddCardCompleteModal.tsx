import Button from "@/components/Button/Button";
import { useLocation, useNavigate } from "react-router";
import styles from "./AddCardCompleteModal.module.css";
import RoundCheckIcon from "@/components/RoundCheckedIcon/RoundCheckedIcon";
import type { AddCardCompleteLocationState } from "@/AddCard/types/location";

function AddCardCompleteModal() {
  const location = useLocation();
  const navigate = useNavigate();

  const { firstCardNumber = "****", selectedBrand = "현대카드" } =
    (location.state as AddCardCompleteLocationState) || {};

  function handleAddCardConfirmButton() {
    navigate("/");
  }

  return (
    <div
      className={styles.container}
      role="dialog"
      aria-labelledby="card-complete-title"
    >
      <div
        className={styles.description}
        aria-describedby="card-complete-description"
      >
        <RoundCheckIcon size="large" />
        <p id="card-complete-title" className={styles.details}>
          <span
            id="card-complete-number-description"
            className={styles.detailsSpan}
          >
            {firstCardNumber}로 시작하는
          </span>
          <span
            id="card-complete-brand-description"
            className={styles.detailsSpan}
          >
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
          aria-label="확인 및 홈으로 이동"
        >
          확인
        </Button>
      </div>
    </div>
  );
}

export default AddCardCompleteModal;
