import styles from "./CardRegisterComplete.module.css";
import { useCardContext } from "../../contexts/CardContext";
import { CARD_COMPANIES } from "../../components/CardCompanySelect/CardCompanySelect";
import RegisterAnotherCardButton from "../../components/RegisterAnotherCardButton/RegisterAnotherCardButton";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CardRegisterComplete = () => {
  const { cardNumbers, cardColor, isSubmitted } = useCardContext();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const selectedCompany = CARD_COMPANIES.find(
    (company) => company.color === cardColor
  )?.name;

  useEffect(() => {
    if (!isSubmitted) navigate("/");
  }, [isSubmitted, navigate])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key == "Enter") {
        buttonRef.current?.click();
      }
    }

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
      <h2 className={styles.registerCardText}>{`${cardNumbers[0]}로 시작하는`} <br/> {`${selectedCompany}가 등록되었어요.`}</h2>
      <RegisterAnotherCardButton ref={buttonRef}/>
    </div>
  );
};

export default CardRegisterComplete;
