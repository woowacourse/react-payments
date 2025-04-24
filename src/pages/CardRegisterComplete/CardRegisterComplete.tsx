import styles from "./CardRegisterComplete.module.css";
import { useCardContext } from "../../contexts/CardContext";
import { CARD_COMPANIES } from "../../components/CardCompanySelect/CardCompanySelect";

const CardRegisterComplete = () => {
  const { cardNumbers, cardColor } = useCardContext();
  const selectedCompany = CARD_COMPANIES.find(
    (company) => company.color === cardColor
  )?.name;

  return (
    <div className={styles.wrapper}>
      <img
        src="../../complete.png"
        alt="완료 아이콘"
        className={styles.completeIcon}
      />
      <h2 className={styles.registerCardText}>{`${cardNumbers[0]}로 시작하는`} <br/> {`${selectedCompany}가 등록되었어요.`}</h2>
      {/* <RegisterCardButton /> */}
      {/* <button>확인</button> */}
    </div>
  );
};

export default CardRegisterComplete;
