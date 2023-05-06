import { useState } from "react";
import { bank } from "../core/bank";
import { BankItem } from "../type/card";

export function useSelectId() {
  const [selectedBank, setSelectedBank] = useState<BankItem>(bank[0]);

  function selectBank(item: BankItem) {
    setSelectedBank(item);
  }

  return { selectedBank, selectBank };
}
