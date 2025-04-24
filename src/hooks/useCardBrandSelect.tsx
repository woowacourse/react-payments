import { useState } from "react";

export default function useCardBrandSelect() {
  const [cardBrand, setCardBrand] = useState("");
  const [cardBrandError, setCardBrandError] = useState("");

  const onCardBrandChange = (brand: string) => {
    setCardBrand(brand);
    setCardBrandError("");
  };

  return {
    cardBrand,
    cardBrandError,
    onCardBrandChange,
  };
}
