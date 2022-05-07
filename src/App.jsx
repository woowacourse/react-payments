import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyle from 'GlobalStyle';

import AddCard from 'pages/AddCard';
import AddCardComplete from 'pages/AddCardComplete';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/add-card" element={<AddCard />} />
        <Route path="/add-card-complete" element={<AddCardComplete />} />
      </Routes>
    </>
  );
}

export default memo(App);
