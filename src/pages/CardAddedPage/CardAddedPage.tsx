import styles from "./CardAddedPage.module.css";
import GoMainButton from "../../components/Button/GoMainButton";
import { useNavigate, useLocation } from "react-router-dom";
import CheckImage from "../../assets/image/CheckImage.svg";

export default function CardAddedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <img src={CheckImage}></img>
      <div className={styles.description}>
        {location.state.firstFourCardNumber}로 시작하는
        <br />
        {location.state.cardCompanyName}가 등록되었어요.
      </div>
      <GoMainButton onClick={() => navigate("/")}></GoMainButton>
    </div>
  );
}
