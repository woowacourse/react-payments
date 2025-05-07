import styles from "./SelectOption.module.css";

interface SelectState<T> {
  selectedOption: T | null;
  isOpened: boolean;
}

interface SelectOptionProps<T> {
  options: T[];
  setSelectState: React.Dispatch<React.SetStateAction<SelectState<T>>>;
}

const SelectOption = <T extends {}>({
  options,
  setSelectState,
}: SelectOptionProps<T>) => {
  function onClickHandler(option: T) {
    setSelectState({
      selectedOption: option,
      isOpened: false,
    });
  }

  return (
    <ul className={styles.container}>
      {options.map((option, index) => (
        <li
          key={index}
          onClick={() => onClickHandler(option)}
          className={`${styles.item} tx-md`}
        >
          {String(option)}
        </li>
      ))}
    </ul>
  );
};

export default SelectOption;
