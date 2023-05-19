import { Outlet } from 'react-router-dom';

import { ModalProvider } from './utils/context/ModalContext';
import { CardsProvider } from './domain/context/CardsContext';

const App = () => {
  return (
    <ModalProvider>
      <CardsProvider>
        <Outlet />
      </CardsProvider>
    </ModalProvider>
  );
};

export default App;
