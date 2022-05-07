import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import CardAppPage from 'page/cardAdd';
import MainPage from 'page/main';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [title] = useState('보유카드');

  return (
    <Layout>
      <>
        <Header title={title} />
        <BrowserRouter>
          <Routes>
            <Route path="/react-payments/" element={<MainPage />}></Route>
            <Route path="/react-payments/add" element={<CardAppPage />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </Layout>
  );
};

export default App;
