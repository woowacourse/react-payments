import { useState } from 'react';
import { Page } from './abstracts/types';
import CardListPage from './components/page/CardListPage';
import CardRegisterPage from './components/page/CardRegisterPage';
import CardAliasSetPage from './components/page/CardAliasSetPage';

const Router = () => {
  const [currentPage, setCurrentPage] = useState<{ page: Page; data?: any }>({ page: Page.list });
  const navigate = (page: Page, data?: any) => {
    setCurrentPage({ page, data });
  };

  const pageRoute: Record<Page, React.ReactNode> = {
    list: <CardListPage navigate={navigate} />,
    register: <CardRegisterPage navigate={navigate} />,
    aliasSet: <CardAliasSetPage navigate={navigate} navData={currentPage.data} />,
  };

  return <>{pageRoute[currentPage.page]}</>;
};

export default Router;
