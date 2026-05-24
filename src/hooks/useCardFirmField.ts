import { useState } from "react";

export default function useCardFirmField() {
  const [cardFirm, setCardFirm] = useState({ value: "", label: "" });

  const onCardFirmChange = (value: string, label: string) =>
    setCardFirm({ value, label });

  const isCardFirmValid = cardFirm.value !== "";

  return { cardFirm, onCardFirmChange, isCardFirmValid };
}
