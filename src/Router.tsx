import { useState } from 'react';
import { Page } from './types';
import CardListPage from './components/page/CardListPage';
import CardRegisterPage from './components/page/CardRegisterPage';

const Router = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.list);
  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  const pageRoute: Record<string, React.ReactNode> = {
    list: <CardListPage navigate={navigate} />,
    register: <CardRegisterPage navigate={navigate} />,
  };

  return <>{pageRoute[currentPage]}</>;
};

export default Router;
