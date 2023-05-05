import React, { createContext, useState } from "react";

export const ModalStateContext = createContext({
  isModalOpen: false,
});

export const ModalDispatchContext = createContext({
  toggleModal: (): void => {},
});

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalStateContext.Provider value={{ isModalOpen }}>
      <ModalDispatchContext.Provider value={{ toggleModal }}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
