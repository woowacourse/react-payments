import { createContext } from "react";

export interface SelectContextType<T extends string> {
  value: T | null;
  onChange: (next: T) => void;
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const SelectContext = createContext<SelectContextType<string> | null>(null);

export default SelectContext;
