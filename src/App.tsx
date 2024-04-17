import NewCardInput from "./pages/NewCardInput";

import AppLayout from "./components/layout/AppLayout";

import GlobalStyle from "./styles/global";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />

      <AppLayout>
        <NewCardInput />
      </AppLayout>
    </>
  );
}

export default App;
