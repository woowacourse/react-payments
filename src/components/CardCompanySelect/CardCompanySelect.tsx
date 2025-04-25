import { useState } from "react";
import styles from "./CardCompanySelect.module.css";
import InputContainer from "../InputContainer/InputContainer";
import { useCardContext } from "../../contexts/CardContext";

export const CARD_COMPANIES = [
  { name: "BC카드", color: "#F04651" },
  { name: "신한카드", color: "#0046FF" },
  { name: "카카오뱅크", color: "#FFE600" },
  { name: "현대카드", color: "#000000" },
  { name: "우리카드", color: "#007BC8" },
  { name: "롯데카드", color: "#ED1C24" },
  { name: "하나카드", color: "#009490" },
  { name: "국민카드", color: "#6A6056" },
];
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
      (company) => company.name === option
    );
    if (selectedCompany) setCardColor(selectedCompany.color);
  };

  return (
    <InputContainer
      title="카드사를 선택해 주세요"
      subTitle="현재 국내 카드사만 가능합니다."
    >
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
