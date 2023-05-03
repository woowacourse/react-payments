import { Outlet } from 'react-router-dom';

import { PreviousPathProvider } from './utils/context/PreviousPathContext';
import { ModalProvider } from './components/common/Modal/ModalContext';
import { CardsProvider } from './domain/context/CardsContext';

const App = () => {
  return (
    <PreviousPathProvider>
      <ModalProvider>
        <CardsProvider>
          <Outlet />
        </CardsProvider>
      </ModalProvider>
    </PreviousPathProvider>
  );
};

export default App;
