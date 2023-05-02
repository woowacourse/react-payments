import GlobalStyle from "./style/global";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { ModalContextProvider } from "./context";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ModalContextProvider>
        <RouterProvider router={router} />
      </ModalContextProvider>
    </>
  );
};

export default App;
