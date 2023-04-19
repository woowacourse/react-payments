import styled from "styled-components";
import GlobalStyle from "./styled/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout></Layout>
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
