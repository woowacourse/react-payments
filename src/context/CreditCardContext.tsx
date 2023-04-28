import { Dispatch, PropsWithChildren, createContext, useContext, useState } from 'react';
import { CreditCard, getDefaultCreditCard } from '../type/CreditCard';
import useSingleCreditCard from '../hook/useSingleCreditCard';

interface Props extends PropsWithChildren {
  value?: CreditCard;
}

const CreditCardContext = createContext<ReturnType<typeof useSingleCreditCard> | null>(null);

export const CreditCardProvider = (props: Props) => {
  const { children, value } = props;
  const { card, setCardInfo } = useSingleCreditCard(value);

  return (
    <CreditCardContext.Provider value={{ card, setCardInfo }}>
      {children}
    </CreditCardContext.Provider>
  );
}

export const useCreditCardContext = () => {
  const context = useContext(CreditCardContext);

  if (context === null) throw new Error('[ERROR] <CreditCardProvider>가 존재하지 않습니다!! 먼저 만들어 주세요.');

  const { card, setCardInfo } = context;

  return { card, setCardInfo };
}

export default CreditCardContext;