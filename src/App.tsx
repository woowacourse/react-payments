import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
