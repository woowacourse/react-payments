import {ChangeEvent, useRef, useState} from "react";
import {CardBrandType} from "../types";

export const useCardBrand = (onComplete?: () => void) => {
  const [brand, setBrand] = useState<CardBrandType | null>(null);

  const brandRef = useRef<HTMLSelectElement>(null);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value as CardBrandType;
    setBrand(selectedBrand || null);

    // 카드사 선택 완료 시 onComplete 호출
    if (selectedBrand && onComplete) {
      setTimeout(() => onComplete(), 100);
    }
  }

  const resetBrand = () => {
    setBrand(null);
  }

  const isBrandSelected = (): boolean => {
    return brand !== null;
  }

  return {
    brand,
    brandRef,
    onChange,
    resetBrand,
    isBrandSelected,
    isValid: isBrandSelected(),
  }
}
