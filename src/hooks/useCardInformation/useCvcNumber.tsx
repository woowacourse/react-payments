import { useState } from "react";
import { CvcNumberType } from "../../types/CardInformationType";

const useCvcNumber = () => {
  const [cvcNumber, setCvcNumber] = useState<CvcNumberType>([""]);

  return { cvcNumber, setCvcNumber };
};

export default useCvcNumber;
