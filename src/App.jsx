import { memo } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import GlobalStyle from 'GlobalStyle';
import styled from 'styled-components';

import Button from 'components/common/Button';
import AddCard from 'pages/AddCard';
import AddCardComplete from 'pages/AddCardComplete';

import { ReactComponent as Arrow } from 'assets/arrow.svg';

const Styled = {
  Page: styled.div`
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 400px;
    height: 757px;
  `,
  Header: styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 25px;
  `,

  Title: styled.span`
    font-size: 16px;
    margin-left: 18px;
  `,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Styled.Page>
        <Styled.Header>
          <Button size="small">
            <Arrow />
          </Button>
          <Styled.Title>카드 추가</Styled.Title>
        </Styled.Header>
        <Routes>
          <Route path="/card-add" element={<AddCard />} />
          <Route path="/card-add-complete" element={<AddCardComplete />} />
        </Routes>
      </Styled.Page>
    </>
  );
}

export default memo(App);
