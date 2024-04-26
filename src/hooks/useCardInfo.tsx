import { useMemo, useState } from 'react';
import {
  CardInfoContext,
  initialCardInfoContext,
} from '../context/CardInfoContext';

export const CardInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(
    initialCardInfoContext.cardInfo,
  );

  const changeCardInfo = (newCardInfo: CardInfo) => {
    setCardInfo(newCardInfo);
  };

  const contextValue = useMemo(
    () => ({ cardInfo, changeCardInfo }),
    [cardInfo, changeCardInfo],
  );

  return (
    <CardInfoContext.Provider value={contextValue}>
      {children}
    </CardInfoContext.Provider>
  );
};
