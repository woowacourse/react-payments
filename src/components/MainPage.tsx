import React from 'react';
import styled from "styled-components";
import CardInfo from "./CardInfo";
import CardPreview from "./CardPreview";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  gap: 48px;

  width: 100%;
  max-width: 375px;
  height: fit-content;
  background-color: white;
`

const MainPage = () => {
  return (
    <Main>
      <CardPreview />
      <CardInfo />
    </Main>
  )
}

export default MainPage;