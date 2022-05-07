import { useContext } from "react";
import { CardInfoContext } from "../contexts/CardInfoContext";

import {
  initialCardAlias,
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
      setCardAlias,
    },
  } = useContext(CardInfoContext);

  const handleResetInput = () => {
    setCardNumber(initialCardNumber);
    setExpireDate(initialExpireDate);
    setHolderName(initialHolderName);
    setSecurityCode(initialSecurityCode);
    setPassword(initialPassword);
    setCardAlias(initialCardAlias);
  };

  return { state, handleResetInput };
}
