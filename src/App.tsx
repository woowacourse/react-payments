import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'GlobalStyle';
import Home from 'pages/Home';
import RegisterCard from 'pages/RegisterCard';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterCard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
