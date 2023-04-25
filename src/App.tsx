import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardRegister from "./pages/CardRegister/CardRegister";
import MyCardList from "./pages/MyCardList/MyCardList";
import CardRegisterProvider from "./context/CardRegisterContext";

import Layout from "./components/@common/Layout/Layout";
import { BottomSheetProvider } from "./context/BottomSheetContext";

function App() {
  return (
    <>
      <BottomSheetProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                path="/"
                element={
                  <CardRegisterProvider>
                    <MyCardList />
                  </CardRegisterProvider>
                }
              />
              <Route
                path="/registerCard"
                element={
                  <CardRegisterProvider>
                    <CardRegister />
                  </CardRegisterProvider>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </BottomSheetProvider>
    </>
  );
}

export default App;
