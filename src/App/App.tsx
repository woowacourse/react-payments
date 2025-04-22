import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import global from '@/styles/global';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import CompletePage from '@/pages/CompletePage/CompletePage';

function App() {
  return (
    <>
      <Global styles={global} />
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </>
  );
}

export default App;
