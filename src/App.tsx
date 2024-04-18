import NewCardInputPage from "./pages/NewCardInputPage";

import AppLayout from "./components/layout/AppLayout";

import GlobalStyle from "./styles/global";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />

      <AppLayout>
        <NewCardInputPage />
      </AppLayout>
    </>
  );
}

export default App;
