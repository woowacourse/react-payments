import styled from "styled-components";
import GlobalStyle from "./styled/GlobalStyle";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/addCard" element={<AddCardPage />} />
        </Routes>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  min-width: 375px;
  width: 100vw;
  height: 100vh;

  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #eeeeee;
`;

export default App;
