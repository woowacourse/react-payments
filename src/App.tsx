import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyCard from './pages/MyCard';
import AddCard from './pages/AddCard';

import AddCardAlias from './pages/AddCardAlias';

import CardListProvider from './components/context/CardListProvider';
import PaymentProvider from './components/context/PaymentsProvider';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <CardListProvider>
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
      </CardListProvider>
    </BrowserRouter>
  );
}

export default App;
