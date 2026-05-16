import { Route, Routes } from "react-router-dom";
import CardRegisterPage from "./feature/CardRegister/CardRegisterPage";
import CardRegisterCompletePage from "./feature/CardRegisterComplete/CardRegisterCompletePage";
import styled from "styled-components";
import CardListPage from "./feature/CardListPage/CardListPage";

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
`;
