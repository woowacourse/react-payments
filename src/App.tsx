import { Route, Routes } from 'react-router-dom';

import './styles/App.css';
import './styles/reset.css';
import CardRegisterForm from './pages/CardRegisterForm';
import CardRegisterSuccess from './pages/CardRegisterSuccess';

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<CardRegisterForm />} />
        <Route
          path="/card-register-success"
          element={<CardRegisterSuccess />}
        />
      </Routes>
    </div>
  );
}

export default App;
