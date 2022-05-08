import { Routes, Route } from 'react-router-dom';
import './App.css';
import CardAdd from './pages/CardAdd';
import EnterNickname from './pages/EnterNickname';
import { UserContext } from './context/userContext';
import { UserListContext } from './context/userListContext';
import useCardInfoReducer from './hooks/useCardInfoReducer';
import CardList from './pages/CardList';
import { useState } from 'react';

const App = () => {
  const [inputStates, updateInputStates] = useCardInfoReducer();
  const [userList, updateUserList] = useState([]);

  return (
    <div className='app'>
      <UserListContext.Provider value={{ userList, updateUserList }}>
        <UserContext.Provider value={{ inputStates, updateInputStates }}>
          <Routes>
            <Route path='/' element={<CardList />} />
            <Route path='/cardAdd' element={<CardAdd />} />
            <Route path='/enterNickname' element={<EnterNickname />} />
          </Routes>
        </UserContext.Provider>
      </UserListContext.Provider>
    </div>
  );
};

export default App;
