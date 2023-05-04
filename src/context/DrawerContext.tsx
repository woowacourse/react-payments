import { createContext, useContext, useState } from "react";

interface DrawerContext {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerContext = createContext<DrawerContext | null>(null);

export function DrawerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const contextValue = { isDrawerOpen, setIsDrawerOpen };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawerContext() {
  const context = useContext(DrawerContext);
  if (!context) throw new Error("DrawerProvider not found");
  return context;
}
