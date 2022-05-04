import './App.css';
import CardAddPage from './Pages/CardAddPage';
import CardListPage from './Pages/CardListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardNumberContextProvider } from './context/CardNumberContext';
import { ExpiredDateContextProvider } from './context/ExpiredDateContext';
import { CardOwnerContextProvider } from './context/CardOwnerContext';

function App() {
  return (
    <div className="App">
      <CardNumberContextProvider>
        <ExpiredDateContextProvider>
          <CardOwnerContextProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  path="react-payments/cardAdd"
                  element={<CardAddPage />}
                />
                <Route
                  path="react-payments/cardList"
                  element={<CardListPage />}
                />
              </Routes>
            </BrowserRouter>
          </CardOwnerContextProvider>
        </ExpiredDateContextProvider>
      </CardNumberContextProvider>
    </div>
  );
}

export default App;
