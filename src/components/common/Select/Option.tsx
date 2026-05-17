import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import type { ReactNode } from "react";

import useSelectContext from "./useSelectContext";

interface OptionProps {
  value: string;
  children: ReactNode;
}

const Option = ({ value, children }: OptionProps) => {
  const { value: selectedValue, onChange } = useSelectContext();
  const isSelected = selectedValue === value;

  return (
    <OptionItem
      type="button"
      role="option"
      aria-selected={isSelected}
      isSelected={isSelected}
      onClick={() => onChange(value)}
    >
      {children}
    </OptionItem>
  );
};

const OptionItem = styled.button<{ isSelected: boolean }>`
  width: 100%;
  text-align: left;
  padding: 8px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${COLOR_PALETTE["BLACK-900"]};
  background-color: ${({ isSelected }) =>
    isSelected ? COLOR_PALETTE.GRAY : COLOR_PALETTE.WHITE};
  &:hover {
    background-color: ${COLOR_PALETTE.GRAY};
    opacity: 0.6;
  }
`;

export default Option;
