import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import Home from 'pages/Home';
import RegisterCard from 'pages/RegisterCard';
import NotFound from 'pages/NotFound';
import RegisterCardName from 'pages/RegisterCardName';
import { CardInfoProvider } from 'context/CardInfoContext';
import { ModalProvider } from 'context/ModalContext';

function App() {
  return (
    <>
      <ModalProvider>
        <CardInfoProvider>
          <GlobalStyle />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterCard />} />
              <Route path="/register-name" element={<RegisterCardName />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CardInfoProvider>
      </ModalProvider>
    </>
  );
}

export default App;
