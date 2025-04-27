import { useNavigate } from "react-router";
import styles from "./AddCardSuccessPage.module.css";
import CheckCircleIcon from "../../../components/common/icon/CheckCircleIcon";
import { CARD_BACKGROUND_COLOR } from "../payment-input/components/cardPreview/constants/DisplayData";

interface AddCardSuccessPageProps {
  cardNumber: string;
  onConfirm: () => void;
  brandName: string;
}

function AddCardSuccessPage({
  cardNumber = "5511",
  brandName = "BC카드",
}: AddCardSuccessPageProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <CheckCircleIcon circleColor={CARD_BACKGROUND_COLOR[brandName]} />
        </div>

        <div className={styles.messageContainer}>
          <p className={`${styles.message} tx-xl`}>
            {cardNumber}로 시작하는
            <br />
            BC카드가 등록되었어요.
          </p>
        </div>

        <button
          className={`${styles.confirmButton} tx-lg`}
          onClick={() => navigate("/add-card")}
          style={{
            backgroundColor: CARD_BACKGROUND_COLOR[brandName],
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default AddCardSuccessPage;
