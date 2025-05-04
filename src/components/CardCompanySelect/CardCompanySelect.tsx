import styles from "./CardCompanySelect.module.css";
import InputContainer from "../InputContainer/InputContainer";
import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_COMPANIES } from "../../constants/cardCompanyInfo";

const CARD_OPTIONS = Object.keys(
  CARD_COMPANIES,
) as (keyof typeof CARD_COMPANIES)[];

const CardCompanySelect = () => {
  const {
    formValues,
    isOpenSelectCardCompany,
    setIsOpenSelectCardCompany,
    handleCardCompany,
  } = useCardContext();

  const toggleOpen = () => {
    setIsOpenSelectCardCompany((prev) => !prev);
  };

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_COMPANY.TITLE}
      subTitle={INPUT_CONTAINER.CARD_COMPANY.SUBTITLE}
    >
      <div className={styles.wrapper}>
        <div className={styles.selectBox} onClick={toggleOpen} tabIndex={0}>
          <span
            className={
              formValues.cardCompany ? styles.selected : styles.placeholder
            }
          >
            {formValues.cardCompany || INPUT_CONTAINER.CARD_COMPANY.PLACEHOLDER}
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
                {CARD_COMPANIES[option].name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </InputContainer>
  );
};

export default CardCompanySelect;
