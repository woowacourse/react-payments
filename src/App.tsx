import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate replace to='/404' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
