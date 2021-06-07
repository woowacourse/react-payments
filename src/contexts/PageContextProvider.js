import { createContext, useState } from 'react';

import { CardList } from '../components/Page/Body/CardList';
import { CardRegister } from '../components/Page/Body/CardRegister';
import { CardRegistered } from '../components/Page/Body/CardRegistered';
import { Header } from '../components/Page/Header';

import { PAGE_TITLE } from '../utils/constants/messages';

import { Button, Title } from '../style';
import CardFormContextProvider from './CardFormContextProvider';

const PageContext = createContext();

const PageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('cardList');

  const pages = {
    cardRegister: (
      <>
        <Header>
          <Button onClick={() => setCurrentPage('cardList')}>{'◀︎'}</Button>
          <Title>{PAGE_TITLE.CARD_REGISTER}</Title>
        </Header>
        <CardFormContextProvider>
          <CardRegister />
        </CardFormContextProvider>
      </>
    ),
    cardRegistered: <CardRegistered />,
    cardList: (
      <>
        <Header>
          <Title>{PAGE_TITLE.CARD_LIST}</Title>
        </Header>
        <CardList />
      </>
    ),
  };

  const renderCurrentPage = () => {
    return pages[currentPage];
  };

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage, renderCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
export { PageContext };
