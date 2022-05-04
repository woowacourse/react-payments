import './App.css';
import CardAddPage from './Pages/CardAddPage';
import CardCompletePage from './Pages/CardCompletePage';
import CardListPage from './Pages/CardListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardNumberContextProvider } from './context/CardNumberContext';
import { ExpiredDateContextProvider } from './context/ExpiredDateContext';
import { CardOwnerContextProvider } from './context/CardOwnerContext';
import { PasswordContextProvider } from './context/PasswordContext';
import { SecurityNumberContextProvider } from './context/SecurityNumberContext';
import { NickNameContextProvider } from './context/NickNameContext';

function App() {
  return (
    <div className="App">
      <CardNumberContextProvider>
        <ExpiredDateContextProvider>
          <CardOwnerContextProvider>
            <SecurityNumberContextProvider>
              <PasswordContextProvider>
                <NickNameContextProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route
                        path="react-payments/cardAdd"
                        element={<CardAddPage />}
                      />
                      <Route
                        path="react-payments/cardComplete"
                        element={<CardCompletePage />}
                      />
                      <Route
                        path="react-payments/cardList"
                        element={<CardListPage />}
                      />
                      <Route path="*" />
                    </Routes>
                  </BrowserRouter>
                </NickNameContextProvider>
              </PasswordContextProvider>
            </SecurityNumberContextProvider>
          </CardOwnerContextProvider>
        </ExpiredDateContextProvider>
      </CardNumberContextProvider>
    </div>
  );
}

export default App;
