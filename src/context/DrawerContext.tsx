import { createContext, useContext, useState } from "react";

interface DrawerState {
  isDrawerOpen: boolean;
}

interface DrawerAction {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerStateContext = createContext<DrawerState | null>(null);
export const DrawerDispatchContext = createContext<DrawerAction | null>(null);

export function DrawerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  return (
    <DrawerStateContext.Provider value={{ isDrawerOpen }}>
      <DrawerDispatchContext.Provider value={{ setIsDrawerOpen }}>
        {children}
      </DrawerDispatchContext.Provider>
    </DrawerStateContext.Provider>
  );
}

export function useDrawerState() {
  const state = useContext(DrawerStateContext);
  if (!state) throw new Error("DrawerProvider not found");
  return state;
}

export function useDrawerDispatch() {
  const dispatch = useContext(DrawerDispatchContext);
  if (!dispatch) throw new Error("DrawerProvider not found");
  return dispatch;
}
