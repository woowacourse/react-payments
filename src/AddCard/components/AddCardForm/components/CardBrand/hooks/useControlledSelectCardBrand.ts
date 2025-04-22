import { useState } from "react";
import type { Brand } from "../types";

const useControlledSelectedCardBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  return { selectedBrand, setSelectedBrand };
};

export default useControlledSelectedCardBrand;
