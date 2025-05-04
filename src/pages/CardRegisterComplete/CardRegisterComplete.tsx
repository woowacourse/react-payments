import styles from "./CardRegisterComplete.module.css";
import { useCardContext } from "../../contexts/CardContext";
import { CARD_COMPANIES } from "../../constants/cardCompanyInfo";
import CardRegisterConfirmButton from "../../components/CardRegisterConfirmButton/CardRegisterConfirmButton";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/route";

const CardRegisterComplete = () => {
  const { formValues, isSubmitted } = useCardContext();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const selectedCompany = Object.values(CARD_COMPANIES).find(
    (company) => company.color === formValues.cardColor,
  )?.name;

  useEffect(() => {
    if (!isSubmitted) navigate(ROUTE.HOME);
  }, [isSubmitted, navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <img
        src="../../complete.png"
        alt="완료 아이콘"
        className={styles.completeIcon}
      />
      <h2 className={styles.registerCardText}>
        {`${formValues.cardNumbers[0]}로 시작하는`} <br />
        {`${selectedCompany ?? "알 수 없는 카드사"}가 등록되었어요.`}
      </h2>
      <CardRegisterConfirmButton ref={buttonRef} />
    </div>
  );
};

export default CardRegisterComplete;
