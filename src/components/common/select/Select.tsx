import { useState } from 'react';
import styles from './Select.module.css';

export interface SelectProps {
  name: string;
  placeholder: string;
  optionList: string[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  handleOptionClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  isRequired?: boolean;
}

function Select({
  name,
  placeholder,
  optionList,
  selectedValue,
  setSelectedValue,
  handleOptionClick,
  isRequired,
}: SelectProps) {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  function handleSelectClick() {
    setIsOpenOptions(true);
  }

  function selectOption(e: React.MouseEvent<HTMLLIElement>) {
    const newSelectedValue = e.currentTarget.textContent as string;
    setSelectedValue(newSelectedValue);
    setIsOpenOptions(false);
    handleOptionClick(e);
  }

  return (
    <div className={styles.selectBox}>
      <div className={styles.selectedInputContainer}>
        <input
          type='text'
          name={name}
          className={styles.selectedInput}
          id='selectInput'
          placeholder={placeholder}
          value={selectedValue}
          onClick={handleSelectClick}
          required={isRequired}
          readOnly
        />
        <img
          src={
            isOpenOptions ? './SelectBox-visible.png' : './SelectBox-hidden.png'
          }
          alt='Selected 드롭다운 아이콘'
          className={styles.selectedIcon}
        />
      </div>
      <ul
        className={`${styles.optionBox} ${isOpenOptions ? '' : styles.hidden}`}
      >
        {optionList.map((value) => {
          return (
            <li
              key={`option-${value}`}
              className={`${styles.optionList}`}
              onClick={selectOption}
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
