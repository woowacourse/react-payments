import GlobalStyle from "./style/global";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
