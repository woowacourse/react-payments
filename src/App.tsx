import GlobalStyle from "./style/global";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { Context } from "./context";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{ isModalOpen, toggleModal }}>
        <RouterProvider router={router} />
      </Context.Provider>
    </>
  );
};

export default App;
