import { createContext, useContext } from 'react';

interface DropdownContextInterface {
  isOpen: boolean;
  onToggleDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextInterface>({ isOpen: false, onToggleDropdown: () => {} });

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (context === null) {
    throw new Error('provider 내부에서 사용해야 합니다.');
  }
  return context;
};

export const DropdownProvider: React.FC<React.PropsWithChildren<{ value: DropdownContextInterface }>> = ({
  value,
  children,
}) => {
  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};
