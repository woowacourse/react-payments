import { Route, Routes } from "react-router-dom";

import styled from "styled-components";
import CardListPage from "./pages/CardListPage/CardListPage";
import CardRegisterPage from "./pages/CardRegisterPage/CardRegisterPage";
import CardRegisterCompletePage from "./pages/CardRegisterCompletePage/CardRegisterCompletePage";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="register" element={<CardRegisterPage />} />
        <Route
          path="register/complete"
          element={<CardRegisterCompletePage />}
        />
        <Route path="cards" element={<CardListPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;

const RootLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 376px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px 0;
`;
