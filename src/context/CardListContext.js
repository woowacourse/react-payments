import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import handleLocalStorage from '../utils/handleLocalStorage';

const CardListValueContext = createContext();
const CardListActionsContext = createContext();

export const CardListProvider = ({ children }) => {
  const [localData, setLocalData] = handleLocalStorage('react-payments-card-info');
  const [cardList, setCardList] = useState(localData);

  useEffect(() => {
    setLocalData(cardList);
  }, [cardList]);

  const actions = useMemo(
    () => ({
      setCardList,
    }),
    []
  );

  return (
    <CardListActionsContext.Provider value={actions}>
      <CardListValueContext.Provider value={cardList}>{children}</CardListValueContext.Provider>
    </CardListActionsContext.Provider>
  );
};

export const useCardListValue = () => {
  return useContext(CardListValueContext);
};

export const useCardListActions = () => {
  return useContext(CardListActionsContext);
};
