import { Routes, Route } from 'react-router-dom';
import './App.css';
import CardAdd from './pages/CardAdd';
import EnterNickname from './pages/EnterNickname';
import { UserContext } from './context/userContext';
import useCard from './hooks/useCard';

const App = () => {
  const [inputStates, updateInputStates] = useCard();

  return (
    <UserContext.Provider value={{ inputStates, updateInputStates }}>
      <Routes>
        <Route path='/' element={<CardAdd />} />
        <Route path='/enterNickname' element={<EnterNickname />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
