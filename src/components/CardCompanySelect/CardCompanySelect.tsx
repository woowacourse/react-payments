import { useState } from "react";
import styles from "./CardCompanySelect.module.css";
import InputContainer from "../InputContainer/InputContainer";

const CARD_OPTIONS = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

const CardCompanySelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <InputContainer title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다.">
      <div className={styles.wrapper}>
        <div className={styles.selectBox} onClick={toggleOpen} tabIndex={0}>
          <span className={selected ? styles.selected : styles.placeholder}>
            {selected || "카드사를 선택해주세요"}
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
