import React, { useState } from 'react';
import CardRegisterPage from './components/Page/CardRegisterPage';
import CardListPage from './components/Page/CardListPage';
import styled from 'styled-components';

function App() {
  const [currentPage, setCurrentPage] = useState('list');
  const navigate = (page: string) => {
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
