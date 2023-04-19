import React from 'react';
import './App.css';
import AddCardPage from './pages/AddCardPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <div>카드 목록</div>
      </Route>
      <Route path="/add">
        <AddCardPage />
      </Route>
    </BrowserRouter>
  );
};

export default App;
