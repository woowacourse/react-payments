import styles from "./CardCompanySelect.module.css";
import InputContainer from "../InputContainer/InputContainer";
import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_COMPANIES } from "../../constants/cardCompanyInfo";

const CARD_OPTIONS = CARD_COMPANIES.map((company) => company.name);

const CardCompanySelect = () => {
  const { isOpenSelectCardCompany, setIsOpenSelectCardCompany, cardCompany, handleCardCompany } = useCardContext();

  const toggleOpen = () => setIsOpenSelectCardCompany(!isOpenSelectCardCompany);

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_COMPANY.TITLE}
      subTitle={INPUT_CONTAINER.CARD_COMPANY.SUBTITLE}
    >
      <div className={styles.wrapper}>
        <div className={styles.selectBox} onClick={toggleOpen} tabIndex={0}>
          <span className={cardCompany ? styles.selected : styles.placeholder}>
            {cardCompany || INPUT_CONTAINER.CARD_COMPANY.PLACEHOLDER}
          </span>
          <span className={styles.arrow}>▾</span>
        </div>
        {isOpenSelectCardCompany && (
          <ul className={styles.optionList}>
            {CARD_OPTIONS.map((option) => (
              <li
                key={option}
                className={styles.option}
                onClick={() => handleCardCompany(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </InputContainer>
  );
};

export default CardCompanySelect;
