import { useContext, createContext } from 'react';

export const CardContext = createContext(null);

const useCardContext = () => {
  const { state, dispatch } = useContext(CardContext);

  return { state, dispatch };
};

export default useCardContext;
