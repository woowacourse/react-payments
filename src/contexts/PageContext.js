import { createContext, useState, useMemo, useContext } from 'react';

import { PAGE_LIST } from 'constants';

const PageContext = createContext();

function PageContextProvider({ children }) {
  const [pageTitle, setTitle] = useState('');
  const [pageLocation, setLocation] = useState(PAGE_LIST.CARD_LIST);

  // 이전 페이지 만들고 이전 페이지 상태가 존재할 시 새로 뜨는 페이지에 애니메이션 주기

  const value = useMemo(
    () => ({
      state: { pageTitle, pageLocation },
      action: { setTitle, setLocation },
    }),
    [pageTitle, pageLocation],
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

function usePageContext() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('PageContextProvider가 로드되지 않았습니다.');
  }

  const { pageTitle, pageLocation } = context.state;
  const { setTitle, setLocation } = context.action;

  const setPageTitle = (title) => setTitle(title);
  const setPageLocation = (pageCode) => setLocation(pageCode);

  return { pageTitle, pageLocation, setPageTitle, setPageLocation };
}

export { PageContext, PageContextProvider, usePageContext };
