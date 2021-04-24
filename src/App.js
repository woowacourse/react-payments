import { useState } from 'react';
import CardCreationPage from './pages/cardCreationPage';
import CardListPage from './pages/cardListPage';
import CardCreationCompletePage from './pages/cardCreationCompletePage';
import { PAGE } from './constants/page';

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGE.CARD_LIST);

  return (
    <>
      {currentPage === PAGE.CARD_LIST && <CardListPage setCurrentPage={setCurrentPage} />}
      {currentPage === PAGE.CARD_CREATION && <CardCreationPage setCurrentPage={setCurrentPage} />}
      {currentPage === PAGE.CARD_CREATION_COMPLETE && <CardCreationCompletePage setCurrentPage={setCurrentPage} />}
    </>
  );
};

export default App;
