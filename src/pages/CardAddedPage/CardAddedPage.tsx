import styles from "./CardAddedPage.module.css";
import GoMainButton from "../../components/Button/GoMainButton";
import { useNavigate, useLocation } from "react-router-dom";
import CheckImage from "../../assets/image/CheckImage.svg";

export default function CardAddedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const COMPANY_NAME = location.state.cardCompanyName;
  const CARD_NAME =
    COMPANY_NAME === "카카오뱅크" ? `${COMPANY_NAME} 카드` : COMPANY_NAME;

  return (
    <div className={styles.wrapper}>
      <img src={CheckImage}></img>
      <div className={styles.description}>
        {location.state.firstFourCardNumber}로 시작하는
        <br />
        {CARD_NAME}가 등록되었어요.
      </div>
      <GoMainButton onClick={() => navigate("/")}></GoMainButton>
    </div>
  );
}
