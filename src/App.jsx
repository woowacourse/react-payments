import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyle from 'GlobalStyle';
import styled from 'styled-components';

import AddCard from 'pages/AddCard';
import AddCardComplete from 'pages/AddCardComplete';
import Header from 'components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Styled.Root>
        <Header title="카드 추가" />
        <Routes>
          <Route path="/card-add" element={<AddCard />} />
          <Route path="/card-add-complete" element={<AddCardComplete />} />
        </Routes>
      </Styled.Root>
    </>
  );
}

const Styled = {
  Root: styled.div`
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 400px;
    height: 757px;
  `,
};

export default memo(App);
