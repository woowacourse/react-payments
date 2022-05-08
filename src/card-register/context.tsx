import React, { createContext, useState, useContext, useMemo } from 'react';

export type State = {
  isEditingCVC: boolean;
  updateIsEditingCVC: (newState: boolean) => void;
};

export const CardRegisterContext = createContext<State>({
  isEditingCVC: false,
  updateIsEditingCVC: () => undefined,
});

export function CardRegisterProvider({ children }: { children: React.ReactNode }) {
  const [isEditingCVC, setIsEditingCVC] = useState<boolean>(false);
  const value = useMemo(
    () => ({
      isEditingCVC,
      updateIsEditingCVC: (newState: boolean) => setIsEditingCVC(newState),
    }),
    [isEditingCVC],
  );
  return <CardRegisterContext.Provider value={value}>{children}</CardRegisterContext.Provider>;
}

export function useCardRegisterContext(): State {
  const state = useContext(CardRegisterContext);
  return state;
}
