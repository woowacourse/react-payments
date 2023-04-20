import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global-style';
import variables from './styles/variables';

import { ThemeProvider } from 'styled-components';

import { AddCard, CardList } from './pages';

function App() {
  return (
    <>
      <ThemeProvider theme={variables}>
        <GlobalStyle />
        <div id='App'>
          <Router>
            <Routes>
              <Route path='/' element={<CardList />}></Route>
              <Route path='/add-card' element={<AddCard />}></Route>
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
