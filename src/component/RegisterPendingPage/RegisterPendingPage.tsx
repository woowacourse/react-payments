import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import { useEffect } from "react";
import styles from "./RegisterPendingPage.module.css";

const RegisterPendingPage = () => {
  const navigate = useNavigate();

  // 실제 API통신이 이루어지지 않기 때문에 임의로 2초간 대기
  useEffect(() => {
    setTimeout(() => navigate("/register/success", { replace: true }), 2000);
  }, []);

  return (
    <section className={styles.container}>
      <LoadingSpinner diameter="99px" borderWidth="11px"/>
      <h2>카드를 등록중입니다.</h2>
      <p>잠시만 기다려 주세요!</p>
    </section>
  )
};

export default RegisterPendingPage;
