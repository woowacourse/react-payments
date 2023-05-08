import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyCard from './pages/MyCard';
import AddCard from './pages/AddCard';

import AddCardAlias from './pages/AddCardAlias';
import PaymentProvider from './components/context/PaymentsProvider';
import NotFound from './pages/NotFound';
import { useCardModal } from './hooks/useCardModal';
import Modal from 'turtle601-modal-like-chakra-ui';

function App() {
  const [isModal, closeModal, openModal] = useCardModal(true);

  return (
    <BrowserRouter>
      <Modal isModal={isModal} closeModal={closeModal} openModal={openModal}>
        <Routes>
          <Route index element={<MyCard />} />
          <Route
            path="addCard"
            element={
              <PaymentProvider>
                <AddCard />
              </PaymentProvider>
            }
          />
          <Route path="addCardAlias" element={<AddCardAlias />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Modal>
    </BrowserRouter>
  );
}

export default App;
