import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import styles from "./ResultPage.module.css";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstCardNumber, cardBrand } = location.state;

  return (
    <div className={styles["result-page"]}>
      <img className={styles["check-icon"]} src="./check-icon.png" />

      <Text textType="title">{`${firstCardNumber}로 시작하는 ${cardBrand}가 등록되었어요.`}</Text>
      <Button
        text="확인"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}
