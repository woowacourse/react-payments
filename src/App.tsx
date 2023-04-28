import { Page } from './types';
import React, { useState } from 'react';
import styled from 'styled-components';

import CardListPage from './components/page/CardListPage';
import CardRegisterPage from './components/page/CardRegisterPage';
import CardNamePage from './components/page/CardNamePage';

import { CardFormProvider } from './context/cardForm';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.list);
  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  const pageRoute: Record<Page, React.ReactNode> = {
    list: <CardListPage navigate={navigate} />,
    register: <CardRegisterPage navigate={navigate} />,
    name: <CardNamePage navigate={navigate} />,
  };

  return (
    <CardFormProvider>
      <AppWrapper>{pageRoute[currentPage]}</AppWrapper>
    </CardFormProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
