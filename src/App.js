import React, { useState } from 'react';
import PageHost from './components/PageHost';
import CardList from './components/pages/CardList';
import CardRegister from './components/pages/CardRegister';
import CardCompletion from './components/pages/CardCompletion';
import GlobalStyle from './styles/global';

const PAGES = {
  LIST: {
    title: '보유카드',
    content: (props) => <CardList {...props} />,
    backButton: false,
  },
  REGISTER: {
    title: '카드추가',
    content: (props) => <CardRegister {...props} />,
    backButton: true,
  },
  COMPLETION: {
    title: '',
    content: (props) => <CardCompletion {...props} />,
    backButton: false,
  },
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.LIST);

  return (
    <>
      <GlobalStyle />
      <PageHost navigationTitle={currentPage.title}>{currentPage.content()}</PageHost>
    </>
  );
};

export default App;
