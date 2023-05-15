import { createContext, useState } from "react";
import { ModalState, ProviderChildren } from "types";

interface Props extends ProviderChildren {
  initialState: boolean;
}

const ModalStateProvider = ({ initialState, children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

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
