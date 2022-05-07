import { useContext } from "react";
import { CardInfoContext } from "../contexts/CardInfoContext";

import {
  initialCardNumber,
  initialExpireDate,
  initialHolderName,
  initialPassword,
  initialSecurityCode,
} from "../data/initialData";

export default function useResetInput() {
  const {
    state,
    setState: {
      setCardNumber,
      setExpireDate,
      setHolderName,
      setSecurityCode,
      setPassword,
    },
  } = useContext(CardInfoContext);

  const handleResetInput = () => {
    setCardNumber(initialCardNumber);
    setExpireDate(initialExpireDate);
    setHolderName(initialHolderName);
    setSecurityCode(initialSecurityCode);
    setPassword(initialPassword);
  };

  return [state, handleResetInput];
}
