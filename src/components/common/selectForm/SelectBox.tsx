import SelectOption from "./SelectOption";
import styles from "./SelectBox.module.css";
import ArrowSvg from "./assets/ArrowSvg";
import { useEffect, useState } from "react";

interface SelectBoxProps<T> {
  title: string;
  description?: string;
  placeholder: string;
  options: T[];
  autoFocus?: boolean;
  onSelectHandler?: (value: T) => void;
}

interface SelectState<T> {
  selectedOption: T | null;
  isOpened: boolean;
}

const SelectBox = <T extends {}>({
  onSelectHandler,
  placeholder,
  title,
  description,
  options,
  autoFocus,
}: SelectBoxProps<T>) => {
  const [selectState, setSelectState] = useState<SelectState<T>>({
    isOpened: false,
    selectedOption: null,
  });

  function onClickHandler() {
    setSelectState((prev) => ({
      ...prev,
      isOpened: !prev.isOpened,
    }));
  }

  useEffect(() => {
    if (onSelectHandler && selectState.selectedOption !== null) {
      onSelectHandler(selectState.selectedOption);
    }
  }, [selectState.selectedOption]);

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <label className={`${styles.title} tx-xl`}>{title}</label>
        {description && (
          <p className={`${styles.description} tx-md`}>{description}</p>
        )}
      </div>
      <button
        type="button"
        onClick={onClickHandler}
        className={styles.selector}
        autoFocus={autoFocus}
      >
        <span>
          {selectState.selectedOption === null
            ? placeholder
            : String(selectState.selectedOption)}
        </span>
        <ArrowSvg
          color={selectState.selectedOption === null ? "#acacac" : "black"}
          isOpened={selectState.isOpened}
        />
      </button>
      {selectState.isOpened && (
        <SelectOption options={options} setSelectState={setSelectState} />
      )}
    </div>
  );
};

export default SelectBox;
