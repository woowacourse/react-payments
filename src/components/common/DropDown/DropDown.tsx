import Input from '../Input/Input';
import styles from '../../../App.module.css';
import dropDownStyles from './DropDown.module.css';
import { useState } from 'react';
import arrow from '/images/arrow.svg';

type DropDown<T extends string | number | symbol> = {
  itemList: Record<T, string>;
  placeholder?: string;
  selected: T | null;
  handleSelectItem: (selected: T | null) => void;
  isError: boolean;
};

const DropDown = <T extends string | number | symbol>({
  itemList,
  placeholder,
  handleSelectItem,
  selected,
  isError,
}: DropDown<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.horizon__gap__container}
        onClick={() => {
          handleIsOpen();

          if (isOpen) handleSelectItem(null);
        }}>
        <Input
          readOnly
          value={selected ? itemList[selected] : ''}
          placeholder={placeholder}
          isError={isError && !isOpen}
        />
        <img src={arrow} className={`${dropDownStyles['dropdown-arrow']} ${isOpen ? dropDownStyles.rotated : ''}`} />
      </div>
      {isOpen && (
        <ul className={dropDownStyles.dropdown}>
          {(Object.entries(itemList) as [T, string][]).map(([key, value]) => (
            <li>
              <button
                onClick={() => {
                  handleIsOpen();
                  handleSelectItem(key);
                }}>
                {value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
