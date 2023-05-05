import { ReactNode, createContext, useCallback, useState } from 'react';

interface FinishAction {
  (): void;
}

export const FinishValueContext = createContext<boolean | null>(null);
export const FinishActionContext = createContext<FinishAction | null>(null);

interface Props {
  children?: ReactNode;
}

const FinishProvider = ({ children }: Props) => {
  const [isFinish, setIsFinish] = useState(false);

  const finishWork = useCallback(() => {
    setIsFinish(true);
  }, []);

  return (
    <FinishActionContext.Provider value={finishWork}>
      <FinishValueContext.Provider value={isFinish}>
        {children}
      </FinishValueContext.Provider>
    </FinishActionContext.Provider>
  );
};

export default FinishProvider;
