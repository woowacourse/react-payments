import GlobalStyle from "./style/global";
import { PageRouterProvider } from "./provider/router";
import { ModalContextProvider } from "./provider/context/modal";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ModalContextProvider>
        <PageRouterProvider />
      </ModalContextProvider>
    </>
  );
};

export default App;
