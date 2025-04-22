import styles from "./CardBrandDropdown.module.css";
import type { Brand } from "../types";
import Dropdown from "@/components/Dropdown/Dropdown";
import { CARD_BRAND } from "../constants";

export interface BrandDropdownProps {
  selectedBrand: Brand | null;
  setSelectedBrand: (value: Brand) => void;
}

function CardBrandDropdown({
  selectedBrand,
  setSelectedBrand,
}: BrandDropdownProps) {
  return (
    <div className={styles.container}>
      <Dropdown
        id="selected-card-brand"
        className={styles.dropdown}
        itemList={CARD_BRAND}
        placeholder="카드 브랜드를 선택하세요"
        onChange={(e) => setSelectedBrand(e.target.value as Brand)}
        value={selectedBrand ?? ""}
      />
    </div>
  );
}

export default CardBrandDropdown;
