import styles from "./CardBrandDropdown.module.css";
import type { Brand } from "../types";
import Dropdown from "@/components/Dropdown/Dropdown";
import { CARD_BRAND } from "../constants";
import type { Ref } from "react";

export interface BrandDropdownProps {
  selectedBrand: Brand | null;
  setSelectedBrand: (value: Brand) => void;
  ref: Ref<HTMLSelectElement>;
}

function CardBrandDropdown({
  selectedBrand,
  setSelectedBrand,
  ref,
}: BrandDropdownProps) {
  return (
    <div className={styles.container}>
      <Dropdown
        ref={ref}
        id="selected-card-brand"
        value={selectedBrand ?? ""}
        onChange={(e) => setSelectedBrand(e.target.value as Brand)}
        options={CARD_BRAND}
        placeholder="카드 브랜드를 선택해 주세요"
      />
    </div>
  );
}

export default CardBrandDropdown;
