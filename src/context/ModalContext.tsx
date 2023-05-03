import { createContext, PropsWithChildren, useContext, useState } from "react";

export const ModalContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>> | null]
>([false, null]);

export function ModalProvider({ children }: PropsWithChildren) {
  const [initialModalState] = useContext(ModalContext);

  const [modalState, setModalState] = useState(initialModalState);

  return (
    <ModalContext.Provider value={[modalState, setModalState]}>
      {children}
    </ModalContext.Provider>
  );
}
