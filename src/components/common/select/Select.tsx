import { useState } from 'react';
import styles from './Select.module.css';

export interface SelectProps {
  name: string;
  placeholder: string;
  optionList: string[];
}

function Select({ name, placeholder, optionList }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  function handleSelectClick() {
    setIsOpenOptions(true);
  }

  function selectOption(e: React.MouseEvent<HTMLLIElement>) {
    const newSelectedValue = e.currentTarget.textContent as string;
    setSelectedValue(newSelectedValue);
    setIsOpenOptions(false);
  }

  return (
    <div className={styles.selectBox}>
      <input
        type='text'
        name={name}
        className={styles.selectedInput}
        id='selectInput'
        placeholder={placeholder}
        value={selectedValue}
        onClick={handleSelectClick}
        readOnly
      />
      <ul
        className={`${styles.optionBox} ${isOpenOptions ? '' : styles.hidden}`}
      >
        {optionList.map((value) => {
          return (
            <li
              key={`option-${value}`}
              className={`${styles.optionList}`}
              onClick={selectOption}
              aria-option
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Select;
