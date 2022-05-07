import { createContext } from "react";
import {
  initialCardNumber,
  initialExpireDate,
  initialHolderName,
  initialPassword,
  initialSecurityCode,
} from "../data/initialData";
import useInput from "../Hooks/useInput";
import {
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
  actions: {
    handleCardNumberUpdate: () => {},
    handleExpireDateUpdate: () => {},
    handleHolderNameUpdate: () => {},
    handleSecurityCodeUpdate: () => {},
    handlePasswordUpdate: () => {},
  },
});

const CardInfoProvider = ({ children }) => {
  const [cardNumber, handleCardNumberUpdate] = useInput(
    initialCardNumber,
    isInValidCardNumber
  );
  const [expireDate, handleExpireDateUpdate] = useInput(
    initialExpireDate,
    isInValidExpireDate
  );
  const [holderName, handleHolderNameUpdate] = useInput(
    initialHolderName,
    isInValidHolderName
  );
  const [securityCode, handleSecurityCodeUpdate] = useInput(
    initialSecurityCode,
    isInvalidSecurityCode
  );
  const [password, handlePasswordUpdate] = useInput(
    initialPassword,
    isInvalidPassword
  );

  const value = {
    state: { cardNumber, expireDate, holderName, securityCode, password },
    actions: {
      handleCardNumberUpdate,
      handleExpireDateUpdate,
      handleHolderNameUpdate,
      handleSecurityCodeUpdate,
      handlePasswordUpdate,
    },
  };

  return (
    <CardInfoContext.Provider value={value}>
      {children}
    </CardInfoContext.Provider>
  );
};

export { CardInfoProvider, CardInfoContext };
