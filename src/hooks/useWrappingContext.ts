import { useContext } from 'react';

const useWrappingContext = <T>(ContextValue: React.Context<T | null>) => {
  const state = useContext(ContextValue);
  if (state == null) throw new Error('Context가 null 입니다.');
  return state;
};

export default useWrappingContext;
