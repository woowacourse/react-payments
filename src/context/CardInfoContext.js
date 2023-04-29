import { createContext, useContext, useMemo, useState } from 'react';

import { v4 as uuid } from 'uuid';

const CardInfoValueContext = createContext();
const CardInfoActionsContext = createContext();

export const CardInfoProvider = ({ children }) => {
  const getInit = () => {
    return {
      id: uuid(),
      firstCardNumbers: '',
      secondCardNumbers: '',
      thirdCardNumbers: '',
      fourthCardNumbers: '',
      expirationMonth: '',
      expirationYear: '',
      ownerName: '',
      securityNumbers: '',
      firstPassword: '',
      secondPassword: '',
      bank: '',
      nickname: '',
    };
  };

  const [cardInfo, setCardInfo] = useState(getInit());

  const actions = useMemo(
    () => ({
      updateBank(bank, closeModal) {
        setCardInfo((prev) => ({
          ...prev,
          bank,
        }));
        closeModal();
      },

      updateInputValue(name, value) {
        setCardInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
      },

      updateNickname(nickname) {
        setCardInfo((prev) => ({
          ...prev,
          nickname,
        }));
      },

      initCardInfo() {
        setCardInfo(getInit());
      },
    }),
    []
  );

  return (
    <CardInfoActionsContext.Provider value={actions}>
      <CardInfoValueContext.Provider value={cardInfo}>{children}</CardInfoValueContext.Provider>
    </CardInfoActionsContext.Provider>
  );
};

export const useCardInfoValue = () => {
  return useContext(CardInfoValueContext);
};

export const useCardInfoActions = () => {
  return useContext(CardInfoActionsContext);
};
