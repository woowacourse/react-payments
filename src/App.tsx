import { RouterProvider } from "react-router-dom";
import router from "./router";

import NewCardInputPage from "./pages/NewCardInputPage";

import AppLayout from "./components/layout/AppLayout";

import GlobalStyle from "./styles/global";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />

      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </>
  );
}

export default App;
