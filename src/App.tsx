import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MyCardPage, CardRegisterPage } from './components/pages';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MyCardPage />} />
          <Route path="/register" element={<CardRegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
