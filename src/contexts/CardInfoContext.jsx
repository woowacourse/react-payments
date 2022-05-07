import { createContext } from "react";

import useInput from "../Hooks/useInput";

import {
  initialCardAlias,
  initialCardNumber,
  initialExpireDate,
  initialHolderName,
  initialPassword,
  initialSecurityCode,
} from "../data/initialData";
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
  },
  setState: {
    setCardNumber: () => {},
    setExpireDate: () => {},
    setHolderName: () => {},
    setSecurityCode: () => {},
    setPassword: () => {},
  },
  actions: {
    handleCardNumberUpdate: () => {},
    handleExpireDateUpdate: () => {},
    handleHolderNameUpdate: () => {},
    handleSecurityCodeUpdate: () => {},
    handlePasswordUpdate: () => {},
  },
});

const CardInfoProvider = ({ children }) => {
  const [cardNumber, handleCardNumberUpdate, setCardNumber] = useInput(
    initialCardNumber,
    isInValidCardNumber
  );
  const [expireDate, handleExpireDateUpdate, setExpireDate] = useInput(
    initialExpireDate,
    isInValidExpireDate
  );
  const [holderName, handleHolderNameUpdate, setHolderName] = useInput(
    initialHolderName,
    isInValidHolderName
  );
  const [securityCode, handleSecurityCodeUpdate, setSecurityCode] = useInput(
    initialSecurityCode,
    isInvalidSecurityCode
  );
  const [password, handlePasswordUpdate, setPassword] = useInput(
    initialPassword,
    isInvalidPassword
  );
  const [cardAlias, handleCardAliasUpdate, setCardAlias] = useInput(
    initialCardAlias,
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
