import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { Children, isValidElement, useState, type ReactNode } from "react";

import Option from "./Option";
import SelectContext, { type SelectContextType } from "./SelectContext";
import SwitchCase from "../SwitchCase";

export interface SelectProps<T> {
  value: T | null;
  onChange: (next: T) => void;
  placeholder?: string;
  children: ReactNode;
}

const Select = <T extends string>({
  value,
  onChange,
  placeholder = "",
  children,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const handleChange = (next: string) => {
    onChange(next as T);
    close();
  };

  const contextValue: SelectContextType<string> = {
    value,
    onChange: handleChange,
    isOpen,
    toggle,
    close,
  };

  const selectedLabel = findSelectedLabel(children, value);

  return (
    <SelectContext.Provider value={contextValue}>
      <Wrapper>
        <Trigger
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={toggle}
        >
          <SwitchCase
            value={!!selectedLabel}
            caseBy={[
              {
                case: true,
                component: <SelectedOption>{selectedLabel}</SelectedOption>,
              },
            ]}
            defaultCase={<Placeholder>{placeholder}</Placeholder>}
          />
        </Trigger>
        {isOpen && <OptionList role="listbox">{children}</OptionList>}
      </Wrapper>
    </SelectContext.Provider>
  );
};

const findSelectedLabel = (
  children: ReactNode,
  value: string | null,
): ReactNode | null => {
  let label: ReactNode = null;
  Children.forEach(children, (child) => {
    if (
      isValidElement<{ value: string; children: ReactNode }>(child) &&
      child.props.value === value
    ) {
      label = child.props.children;
    }
  });

  return label;
};

const Wrapper = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  width: 100%;
  text-align: left;
  padding: 8px;
  border-radius: 2px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${COLOR_PALETTE.WHITE};
  color: ${COLOR_PALETTE["BLACK-900"]};
  border: 1px solid ${COLOR_PALETTE.GRAY};
  &:focus {
    outline: none;
    border: 1px solid;
    ${COLOR_PALETTE["BLACK-900"]}
  }
`;

const SelectedOption = styled.span``;

const Placeholder = styled.span`
  color: ${COLOR_PALETTE.GRAY};
`;

const OptionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid ${COLOR_PALETTE.GRAY};
  border-radius: 2px;
  background-color: ${COLOR_PALETTE.WHITE};
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`;

Select.Option = Option;

export default Select;
