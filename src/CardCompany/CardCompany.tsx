import { CARD_COMPANY, CardCompanyType } from "../hooks/useCardCompany";
import { useState } from "react";
import InputText from "../components/InputText/InputText";
import inputStyles from "../components/Input/CardNumberInput.module.css";
import styles from "./CardCompany.module.css";
import ChevronUp from "/chevron-up.svg";

interface Props {
  selectedCompany: CardCompanyType | null;
  selectCompany: (company: CardCompanyType) => void;
}

export default function CardCompanyPicker({
  selectedCompany,
  selectCompany,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (company: CardCompanyType) => {
    selectCompany(company);
    setIsOpen(false);
  };

  return (
    <section className={styles["card-company"]}>
      <InputText
        inputValue="카드사를 선택해 주세요."
        variant="title"
        useSuffix={false}
      />
      <InputText
        inputValue="현재 국내 카드사만 가능합니다."
        variant="description"
      />
      <button
        className={`${inputStyles["input-number"]} ${styles["dropdown-button"]}`}
        onClick={toggleDropdown}
      >
        <span className={selectedCompany ? "" : styles["placeholder-label"]}>
          {selectedCompany ? selectedCompany.label : "카드사를 선택해 주세요"}
        </span>
        <img
          src={ChevronUp}
          alt="dropdown-icon"
          className={styles["dropdown-icon"]}
        />
      </button>

      {isOpen && (
        <ul className={styles["input-number"]}>
          {CARD_COMPANY.map((company) => (
            <li
              key={company.value}
              onClick={() => handleSelect(company)}
              className={
                selectedCompany?.value === company.value ? styles.selected : ""
              }
            >
              {company.label}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
