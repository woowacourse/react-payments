import SelectOption from "./SelectOption";
import styles from "./SelectBox.module.css";
import ArrowSvg from "./assets/ArrowSvg";
import { useEffect, useState } from "react";

interface SelectBoxProps {
  title: string;
  description?: string;
  placeholder: string;
  options: string[];
  onSelectHandler?: (value: string) => void;
}

const SelectBox = ({
  onSelectHandler,
  placeholder,
  title,
  description,
  ...props
}: SelectBoxProps) => {
  const [selectState, setSelectState] = useState({
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
      <button onClick={onClickHandler} className={styles.selector}>
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
