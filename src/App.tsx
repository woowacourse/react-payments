import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Register } from './pages/register';
import { AddCardNickName } from './pages/register/AddCardNickName';
import { CardInfoProvider } from './components/providers/CardInfoProvider';
import { ModalProvider } from './components/providers/ModalProvider';
import { CardListProvider } from './components/providers/CardListProvider';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CardInfoProvider>
        <CardListProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/register"
              element={
                <ModalProvider>
                  <Register />
                </ModalProvider>
              }
            />
            <Route path="/register/nickname" element={<AddCardNickName />} />
          </Routes>
        </CardListProvider>
      </CardInfoProvider>
    </BrowserRouter>
  );
}

export default App;
