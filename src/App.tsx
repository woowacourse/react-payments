import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyCard from './pages/MyCard';
import AddCard from './pages/AddCard';

import AddCardAlias from './pages/AddCardAlias';

import CardListProvider from './components/context/CardListProvider';
import PaymentProvider from './components/context/PaymentsProvider';
import CardModalProvider from './components/context/CardModalProvider';

function App() {
  return (
    <BrowserRouter>
      <CardListProvider>
        <CardModalProvider>
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
          </Routes>
        </CardModalProvider>
      </CardListProvider>
    </BrowserRouter>
  );
}

export default App;
