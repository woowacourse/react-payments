import { createContext, useState, useContext } from 'react';

import { DEFAULT_PAGE } from 'constants/';
import { PageContextState, PageState } from 'types';

const PageContext = createContext<PageContextState | null>(null);

function PageContextProvider({ children }) {
  const [pageTitle, setTitle] = useState('');
  const [pageLocation, setLocation] = useState(DEFAULT_PAGE);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { state: { pageTitle, pageLocation }, action: { setTitle, setLocation } };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

function usePageContext() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('PageContextProvider가 로드되지 않았습니다.');
  }

  const { pageTitle, pageLocation } = context.state;
  const { setTitle, setLocation } = context.action;

  const setPageTitle = (title: string) => setTitle(title);
  const setPageLocation = (pageCode: PageState) => setLocation(pageCode);

  return { pageTitle, pageLocation, setPageTitle, setPageLocation };
}

export { PageContextProvider, usePageContext };
