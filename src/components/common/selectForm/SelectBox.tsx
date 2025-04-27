import SelectOption from "./SelectOption";
import styles from "./SelectBox.module.css";
import ArrowSvg from "./assets/ArrowSvg";
import { useEffect, useState } from "react";

interface SelectBoxProps<T> {
  title: string;
  description?: string;
  placeholder: string;
  options: T[];
  onSelectHandler?: (value: T) => void;
}

interface SelectState {
  selectedOption: string;
  isOpened: boolean;
}

const SelectBox = <T extends {}>({
  onSelectHandler,
  placeholder,
  title,
  description,
  ...props
}: SelectBoxProps<T>) => {
  const [selectState, setSelectState] = useState<SelectState>({
    isOpened: false,
    selectedOption: "",
  });

  function onClickHandler() {
    setSelectState({
      ...selectState,
      isOpened: !selectState.isOpened,
    });
  }

  useEffect(() => {
    if (onSelectHandler) onSelectHandler(selectState.selectedOption);
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
      >
        <span>
          {selectState.selectedOption === ""
            ? placeholder
            : selectState.selectedOption}
        </span>
        <ArrowSvg
          color={selectState.selectedOption === "" ? "#acacac" : "black"}
          isOpened={selectState.isOpened}
        />
      </button>
      {selectState.isOpened && (
        <SelectOption setSelectState={setSelectState} {...props} />
      )}
    </div>
  );
};

export default SelectBox;
