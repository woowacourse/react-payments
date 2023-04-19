import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InputBox } from "./components";

import { GlobalStyle } from "./styles/global-style";
import variables from "./styles/variables";

import { ThemeProvider } from "styled-components";
import { CardNumber } from "./components/cardNumber";
import { ExpiredDate } from "./components/expiredDate";
import { UserName } from "./components/userName";
import { SecurityCode } from "./components/securityCode";
import { CardPassword } from "./components/cardPassword";
import { AddCardForm } from "./components/addCardForm";
import { Card } from "./components/common/card";
import { CardList } from "./pages/cardList";

function App() {
  return (
    <>
      <ThemeProvider theme={variables}>
        <GlobalStyle />
        <div id="App">
          <Router>
            <Routes>
              <Route path="/" element={<CardList />}></Route>
              <Route path="/add-card" element={<AddCardForm />}></Route>
              <Route path="/card" element={<Card />}></Route>
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
