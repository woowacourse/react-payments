import React, { useState } from 'react';

import { PaymentsContextProvider } from './contexts/PaymentsContextProvider';
import { useModal } from './hooks/useModal';
import CardAddPage from './page/CardAddPage/CardAddPage';
import CardListPage from './page/CardListPage/CardListPage';
import CardRegisterPage from './page/CardRegisterPage/CardRegisterPage';
import { PAGE } from './utils/constants';

function App() {
  const { isModalOpen, handleModalOpen, handleModalClosed } = useModal();

  const [pageRouter, setPageRouter] = useState(PAGE.LIST);

  const Page = {
    CardAddPage: (
      <CardAddPage
        isModalOpened={isModalOpen}
        handleModalOpen={handleModalOpen}
        handleModalClosed={handleModalClosed}
        setPageRouter={setPageRouter}
      />
    ),
    CardRegisterPage: <CardRegisterPage setPageRouter={setPageRouter} />,
    CardListPage: <CardListPage setPageRouter={setPageRouter} />,
  };

  const pageTable = {
    [PAGE.ADD]: Page.CardAddPage,
    [PAGE.REGISTER]: Page.CardRegisterPage,
    [PAGE.LIST]: Page.CardListPage,
  };

  return (
    <PaymentsContextProvider>
      <div className="relative max-w-375 mt-5 p-5 mx-auto bg-white rounded-3xl">{pageTable[pageRouter]}</div>
    </PaymentsContextProvider>
  );
}

export default App;
