import './App.css';
import CardRegister from './pages/CardRegister';
import CardRegisterCompleted from './pages/CardRegisterCompleted';
import './reset.css';
import { css } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const appStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '376px',
  margin: 'auto',
});

function App() {
  return (
    <div css={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardRegister />}></Route>
          <Route path="/completed" element={<CardRegisterCompleted />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
