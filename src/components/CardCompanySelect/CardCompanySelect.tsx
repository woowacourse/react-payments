import { useState } from "react";
import styles from "./CardCompanySelect.module.css";
import InputContainer from "../InputContainer/InputContainer";
import { useCardContext } from "../../contexts/CardContext";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_COMPANIES } from "../../constants/cardCompanyInfo";

const CARD_OPTIONS = CARD_COMPANIES.map((company) => company.name);

const CardCompanySelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const { setCardColor } = useCardContext();

  const toggleOpen = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);

    const selectedCompany = CARD_COMPANIES.find(
      (company) => company.name === option,
    );
    if (selectedCompany) setCardColor(selectedCompany.color);
  };

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_COMPANY.TITLE}
      subTitle={INPUT_CONTAINER.CARD_COMPANY.SUBTITLE}
    >
      <div className={styles.wrapper}>
        <div className={styles.selectBox} onClick={toggleOpen} tabIndex={0}>
          <span className={selected ? styles.selected : styles.placeholder}>
            {selected || INPUT_CONTAINER.CARD_COMPANY.PLACEHOLDER}
          </span>
          <span className={styles.arrow}>▾</span>
        </div>
        {isOpen && (
          <ul className={styles.optionList}>
            {CARD_OPTIONS.map((option) => (
              <li
                key={option}
                className={styles.option}
                onClick={() => handleSelect(option)}
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
