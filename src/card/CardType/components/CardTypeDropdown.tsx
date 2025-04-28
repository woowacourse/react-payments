import styles from "./CardTypeDropdown.module.css";
import { CARD_TYPE_LIST } from "@/card/CardType/constants";
import Dropdown from "@/components/Dropdown/Dropdown";
import { type ControlledCardType } from "../hooks/useControlledCardType";
import type { OmitIsNextStep } from "@/types";

function CardTypeDropdown({
  cardType,
  handleCardTypeChange,
}: OmitIsNextStep<ControlledCardType>) {
  return (
    <div className={styles.container}>
      <Dropdown
        selectedValue={cardType}
        defaultValue="카드사를 선택해 주세요."
        dropdownList={CARD_TYPE_LIST}
        onChange={handleCardTypeChange}
        autoFocus={true}
      />
    </div>
  );
}

export default CardTypeDropdown;
