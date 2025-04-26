// src/AddCard/components/AddCardCompleteModal/AddCardCompleteModal.tsx
import Button from "@/components/Button/Button";
import { useLocation, useNavigate } from "react-router";

import styles from "./AddCardCompleteModal.module.css";
import RoundCheckIcon from "@/components/RoundCheckedIcon/RoundCheckedIcon";
import type { AddCardCompleteLocationState } from "@/AddCard/types/location";
import Fallback from "@/components/Fallback/Fallback";

export default function AddCardCompleteModal() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return (
      <Fallback
        message="비정상적 접근입니다."
        buttonText="홈으로 돌아가기"
        onButtonClick={() => navigate("/")}
      />
    );
  }

  const { firstCardNumber, selectedBrand } =
    location.state as AddCardCompleteLocationState;

  let displayBrand = selectedBrand;
  if (selectedBrand === "카카오뱅크") {
    displayBrand += " 카드";
  }

  const handleAddCardConfirmButton = () => {
    navigate("/");
  };

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
            {displayBrand}가 등록되었어요!
          </span>
        </p>

        <Button
          size="large"
          variant="rounded"
          onClick={handleAddCardConfirmButton}
          aria-label="확인 및 홈으로 이동"
        >
          확인
        </Button>
      </div>
    </div>
  );
}
