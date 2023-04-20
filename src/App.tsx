import { Page } from './types';
import React, { useState } from 'react';
import styled from 'styled-components';

import CardListPage from './components/page/CardListPage';
import CardRegisterPage from './components/page/CardRegisterPage';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.list);
  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  const pageRoute: Record<string, React.ReactNode> = {
    list: <CardListPage navigate={navigate} />,
    register: <CardRegisterPage navigate={navigate} />,
  };

  return <AppWrapper>{pageRoute[currentPage]}</AppWrapper>;
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
