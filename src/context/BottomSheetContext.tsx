import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

interface BottomSheetContextProps {
  isOpened: boolean;
  content: ReactNode | null;
  openBottomSheet: (newContent?: ReactNode) => void;
  closeBottomSheet: () => void;
}

const BottomSheetContext = createContext<BottomSheetContextProps | null>(null);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);

  if (context === null) {
    throw new Error(
      "useBottomSheet 은 BottomSheetProvider 를 통해 사용되어야 합니다."
    );
  }
  return context;
};

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openBottomSheet = (newContent?: ReactNode) => {
    if (newContent) {
      setContent(newContent);
    }
    setIsOpened(true);
  };
  const closeBottomSheet = () => {
    setIsOpened(false);
  };

  return (
    <BottomSheetContext.Provider
      value={{ isOpened, content, openBottomSheet, closeBottomSheet }}
    >
      {children}
    </BottomSheetContext.Provider>
  );
};
