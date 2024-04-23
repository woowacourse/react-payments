import { createContext, useContext } from 'react';

interface DropdownContextInterface {
  isOpen: boolean;
  onToggleDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextInterface>({ isOpen: false, onToggleDropdown: () => {} });

export const useDropdownContext = () => {
  return useContext(DropdownContext);
};

export const DropdownProvider: React.FC<React.PropsWithChildren<{ value: DropdownContextInterface }>> = ({
  value,
  children,
}) => {
  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};
