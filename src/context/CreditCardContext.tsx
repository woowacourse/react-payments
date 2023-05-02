import { PropsWithChildren, createContext, useContext } from 'react';
import { CreditCard, getDefaultCreditCard } from '../type/CreditCard';
import useStateObject from '../hook/useStateObject';

interface ContextValue {
  card: CreditCard;
  setCardInfo: (newInfo: Partial<CreditCard>) => void;
}

interface Props extends PropsWithChildren {
  value?: CreditCard;
}

const CreditCardContext = createContext<ContextValue | null>(null);

export const CreditCardProvider = (props: Props) => {
  const { children, value } = props;
  const { state: card, setPartialState: setCardInfo } = useStateObject<CreditCard>(value ?? getDefaultCreditCard());

  return (
    <CreditCardContext.Provider value={{ card, setCardInfo }}>
      {children}
    </CreditCardContext.Provider>
  );
}

export const useCreditCardContext = () => {
  const context = useContext(CreditCardContext);

  if (context === null) throw new Error('[ERROR] <CreditCardProvider>가 존재하지 않습니다!! 먼저 만들어 주세요.');

  return context;
}

export default CreditCardContext;