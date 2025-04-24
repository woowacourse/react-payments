import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CardPage from './pages/CardPage/CardPage';
import RegisterSuccess from './pages/RegisterSuccessPage/RegisterSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/registered" element={<RegisterSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
