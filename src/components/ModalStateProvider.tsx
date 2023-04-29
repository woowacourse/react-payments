import { createContext, useState } from "react";
import { ModalState, ProviderChildren } from "types";

const ModalStateProvider = ({ children }: ProviderChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <ModalStateContext.Provider
      value={{ isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen }}
    >
      {children}
    </ModalStateContext.Provider>
  );
};

export default ModalStateProvider;

export const ModalStateContext = createContext<ModalState>({
  isModalOpen: true,
  setIsModalOpen: () => {},
});
