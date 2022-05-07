import { createContext } from "react";

import useInput from "../Hooks/useInput";

import {
  INITIAL_CARD_NUMBER,
  INITIAL_EXPIRE_DATE,
  INITIAL_HOLDER_NAME,
  INITIAL_SECURITY_CODE,
  INITIAL_PASSWORD,
  INITIAL_CARD_ALIAS,
} from "../constants/initialState";
import {
  isInvalidCardAlias,
  isInValidCardNumber,
  isInValidExpireDate,
  isInValidHolderName,
  isInvalidPassword,
  isInvalidSecurityCode,
} from "../validators/validator";

const CardInfoContext = createContext({
  state: {
    cardNumber: {},
    expireDate: {},
    holderName: {},
    securityCode: {},
    password: {},
    cardAlias: {},
  },
  setState: {
    setCardNumber: () => {},
    setExpireDate: () => {},
    setHolderName: () => {},
    setSecurityCode: () => {},
    setPassword: () => {},
    setCardAlias: () => {},
  },
  actions: {
    handleCardNumberUpdate: () => {},
    handleExpireDateUpdate: () => {},
    handleHolderNameUpdate: () => {},
    handleSecurityCodeUpdate: () => {},
    handlePasswordUpdate: () => {},
    handleCardAliasUpdate: () => {},
  },
});

const CardInfoProvider = ({ children }) => {
  const [cardNumber, handleCardNumberUpdate, setCardNumber] = useInput(
    INITIAL_CARD_NUMBER,
    isInValidCardNumber
  );
  const [expireDate, handleExpireDateUpdate, setExpireDate] = useInput(
    INITIAL_EXPIRE_DATE,
    isInValidExpireDate
  );
  const [holderName, handleHolderNameUpdate, setHolderName] = useInput(
    INITIAL_HOLDER_NAME,
    isInValidHolderName
  );
  const [securityCode, handleSecurityCodeUpdate, setSecurityCode] = useInput(
    INITIAL_SECURITY_CODE,
    isInvalidSecurityCode
  );
  const [password, handlePasswordUpdate, setPassword] = useInput(
    INITIAL_PASSWORD,
    isInvalidPassword
  );
  const [cardAlias, handleCardAliasUpdate, setCardAlias] = useInput(
    INITIAL_CARD_ALIAS,
    isInvalidCardAlias
  );

  const value = {
    state: {
      cardNumber,
      expireDate,
      holderName,
      securityCode,
      password,
      cardAlias,
    },
    setState: {
      setCardNumber,
      setExpireDate,
      setHolderName,
      setSecurityCode,
      setPassword,
      setCardAlias,
    },
    actions: {
      handleCardNumberUpdate,
      handleExpireDateUpdate,
      handleHolderNameUpdate,
      handleSecurityCodeUpdate,
      handlePasswordUpdate,
      handleCardAliasUpdate,
    },
  };

  return (
    <CardInfoContext.Provider value={value}>
      {children}
    </CardInfoContext.Provider>
  );
};

export { CardInfoProvider, CardInfoContext };
