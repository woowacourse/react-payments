import {Route, Routes} from 'react-router-dom';
import CardRegisterPage from './feature/CardRegister/CardRegisterPage';
import CardRegisterCompletePage from './feature/CardRegisterComplete/CardRegisterCompletePage';

const App = () => (
  <Routes>
    <Route path='/' element={<CardRegisterPage />} />
    <Route path='/complete' element={<CardRegisterCompletePage />} />
  </Routes>
);

export default App;
