import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentProvider from './components/context/PaymentsProvider';

import MyCard from './components/pages/MyCard';
import AddCard from './components/pages/AddCard';

import CardListProvider from './components/context/CardListProvider';

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
        </Routes>
      </CardListProvider>
    </BrowserRouter>
  );
}

export default App;
