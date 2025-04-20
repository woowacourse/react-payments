import styles from "./CardTypeDropdown.module.css";
import { CARD_TYPE_LIST } from "@/pages/addCard/constants";
import Dropdown from "@/components/Dropdown/Dropdown";
import { CardType } from "@/pages/addCard/types";

export interface CardTypeDropdownProps {
  cardType: CardType | null;
  handleCardTypeChange: (value: CardType) => void;
}

function CardTypeDropdown({
  cardType,
  handleCardTypeChange,
}: CardTypeDropdownProps) {
  return (
    <div className={styles.container}>
      <Dropdown
        selectedValue={cardType}
        defaultValue="카드사를 선택해 주세요."
        dropdownList={CARD_TYPE_LIST}
        onChange={handleCardTypeChange}
      />
    </div>
  );
}

export default CardTypeDropdown;
