import { useContext } from 'react';
import { PageContext } from 'provider/PageContextProvider';

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (context === undefined) {
    throw new Error(
      'useContext는 반드시 PageContext.Provider와 함께 사용해야 합니다.'
    );
  }
  return context;
};
