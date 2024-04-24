import './App.css';
import CardRegister from './pages/CardRegister';
import CardRegisterCompleted from './pages/CardRegisterCompleted';
import './reset.css';
import { css } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const appStyle = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

function App() {
  return (
    <div css={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardRegister />}></Route>
          <Route path="/completed" element={<CardRegisterCompleted />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
