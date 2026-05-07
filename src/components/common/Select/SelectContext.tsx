import { createContext } from "react";

export interface SelectContextType {
  value: string;
  onChange: (next: string) => void;
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const SelectContext = createContext<SelectContextType | null>(null);

export default SelectContext;
