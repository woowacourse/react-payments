import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyCardPage from './pages/MyCardPage/MyCardPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyCardPage />} />
          <Route path="/register" element={<CardRegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
