import GlobalStyle from "./style/global";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { Context } from "./context";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (): void => {
    console.log(isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Context.Provider value={{ isModalOpen, toggleModal }}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Context.Provider>
  );
};

export default App;
