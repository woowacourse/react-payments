import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type IsAccessAliasPage = {
  isAccessAliasPage: boolean;
  setIsAccessAliasPage: Dispatch<SetStateAction<boolean>>;
};

const IsAccessAliasPageContext = createContext<IsAccessAliasPage | null>(null);

export const IsAccessAliasPageProvider = ({ children }: PropsWithChildren) => {
  const [isAccessAliasPage, setIsAccessAliasPage] = useState<boolean>(false);

  return (
    <IsAccessAliasPageContext.Provider value={{ isAccessAliasPage, setIsAccessAliasPage }}>
      {children}
    </IsAccessAliasPageContext.Provider>
  );
};

export const useIsAccessAliasPageContext = () => {
  const isAccessAliasPageContext = useContext(IsAccessAliasPageContext);
  if (isAccessAliasPageContext === null) {
    throw new Error('Context가 존재하지 않습니다.');
  }
  return isAccessAliasPageContext;
};
