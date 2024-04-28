import { useDropdownContext, DropdownProvider } from './provider/DropdownProvider';

import { ArrowDown, ArrowUp } from '@assets/images';

import styles from './Dropdown.module.css';

type OptionType = React.FC<
  React.PropsWithChildren<{ isSelected: boolean; onSelectOption: () => void; onHoverOption: () => void }>
>;
type MenuType = React.FC<React.PropsWithChildren>;
type TriggerType = React.FC<React.PropsWithChildren<{ placeholder: string; value?: string }>>;

const Dropdown: React.FC<React.PropsWithChildren<{ isOpen: boolean; onToggleDropdown: () => void }>> & {
  Trigger: TriggerType;
  Menu: MenuType;
  Option: OptionType;
} = ({ isOpen, onToggleDropdown, children }) => {
  return (
    <DropdownProvider value={{ isOpen, onToggleDropdown }}>
      <div className={styles.dropdownContainer}>{children}</div>
    </DropdownProvider>
  );
};

const Trigger: TriggerType = ({ placeholder, value }) => {
  const { isOpen, onToggleDropdown } = useDropdownContext()!;

  const textStyleClass = value ? styles.optionText : styles.placeholder;
  const borderStyleClass = isOpen && styles.open;
  return (
    <div
      onClick={onToggleDropdown}
      className={`${styles.dropdownTrigger} ${textStyleClass} ${borderStyleClass} ${borderStyleClass}`}
    >
      <span>{value || placeholder}</span>
      <img src={isOpen ? ArrowDown : ArrowUp} alt="arrow" />
    </div>
  );
};

const Menu: MenuType = ({ children }) => {
  const { isOpen } = useDropdownContext()!;

  return isOpen ? <ul className={styles.dropdownMenuContainer}>{children}</ul> : null;
};

const Option: OptionType = ({ isSelected, onSelectOption, onHoverOption, children }) => {
  const selectedStyleClass = isSelected ? styles.selected : '';
  return (
    <li
      className={`${styles.dropdownOption} ${selectedStyleClass}`}
      onMouseEnter={onHoverOption}
      onClick={onSelectOption}
    >
      {children}
    </li>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Option = Option;

export default Dropdown;
