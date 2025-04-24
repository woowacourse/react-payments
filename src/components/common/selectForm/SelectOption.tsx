import styles from "./SelectOption.module.css";

interface ISelectOption {
  options: string[];
  setSelectState: (state: object) => void;
}

const SelectOption = ({ options, setSelectState }: ISelectOption) => {
  function onClickHandler(option: string) {
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
