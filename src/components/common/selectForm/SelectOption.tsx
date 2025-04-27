import styles from "./SelectOption.module.css";

interface ISelectOption<T> {
  options: T[];
  setSelectState: React.Dispatch<React.SetStateAction<T>>;
}

const SelectOption = <T extends {}>({
  options,
  setSelectState,
}: ISelectOption<T>) => {
  function onClickHandler(option: T) {
    setSelectState({
      selectedOption: option,
      isOpened: false,
    });
  }

  return (
    <ul className={styles.container}>
      {options.map((option) => {
        return (
          <li
            onClick={() => onClickHandler(option)}
            className={`${styles.item} tx-md`}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
};

export default SelectOption;
