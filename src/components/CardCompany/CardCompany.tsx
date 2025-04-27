import {
  CARD_COMPANY_INFO,
  CardCompanyType,
} from "../../hooks/useCardCompany/useCardCompanyState";
import useCardCompanyState from "../../hooks/useCardCompany/useCardCompanyState";
import useCardCompanyInputHandler from "../../hooks/useCardCompany/useCardCompanyInputHandler";
import InputText from "../InputText/InputText";
import inputStyles from "../Input/CardNumberInput.module.css";
import styles from "./CardCompany.module.css";
import ChevronUp from "/chevron-up.svg";

interface Props {
  selectedCompany: CardCompanyType | null;
  selectCompany: (company: CardCompanyType) => void;
  onComplete: () => void;
}

const CARD_COMPANY = {
  TITLE: "카드사를 선택해 주세요.",
  DESCRIPTION: "현재 국내 카드사만 가능합니다.",
  PLACEHOLDER: "카드사를 선택해 주세요.",
} as const;

export default function CardCompanyPicker({
  selectedCompany,
  selectCompany,
  onComplete,
}: Props) {
  const { isOpen, toggleDropdown } = useCardCompanyState();
  const { handleSelect } = useCardCompanyInputHandler(
    selectCompany,
    toggleDropdown,
    onComplete
  );

  return (
    <section className={styles["card-company"]}>
      <InputText
        inputValue={CARD_COMPANY.TITLE}
        variant="title"
        useSuffix={false}
      />
      <InputText inputValue={CARD_COMPANY.DESCRIPTION} variant="description" />
      <button
        className={`${inputStyles["input-number"]} ${styles["dropdown-button"]}`}
        onClick={toggleDropdown}
      >
        <span className={selectedCompany ? "" : styles["placeholder-label"]}>
          {selectedCompany ? selectedCompany.label : CARD_COMPANY.PLACEHOLDER}
        </span>
        <img
          src={ChevronUp}
          alt="dropdown-icon"
          className={styles["dropdown-icon"]}
        />
      </button>

      {isOpen && (
        <ul className={styles["input-number"]}>
          {CARD_COMPANY_INFO.map((company) => (
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
