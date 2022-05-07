import { useContext } from "react";
import { CardInfoContext } from "../contexts/CardInfoContext";

import {
  INITIAL_CARD_NUMBER,
  INITIAL_EXPIRE_DATE,
  INITIAL_HOLDER_NAME,
  INITIAL_SECURITY_CODE,
  INITIAL_PASSWORD,
  INITIAL_CARD_ALIAS,
} from "../constants/initialState";

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
    setCardNumber(INITIAL_CARD_NUMBER);
    setExpireDate(INITIAL_EXPIRE_DATE);
    setHolderName(INITIAL_HOLDER_NAME);
    setSecurityCode(INITIAL_SECURITY_CODE);
    setPassword(INITIAL_PASSWORD);
    setCardAlias(INITIAL_CARD_ALIAS);
  };

  return { state, handleResetInput };
}
