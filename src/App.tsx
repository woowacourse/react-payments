import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentProvider from './components/context/PaymentsProvider';

import MyCard from './pages/MyCard';
import AddCard from './pages/AddCard';

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
