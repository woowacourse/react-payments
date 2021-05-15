import classNames from "classnames/bind";
import styles from "./SeperatedInputList.module.scss";
import Input from "../Input.jsx";
import { Fragment, useRef } from "react";

const cx = classNames.bind(styles);

const SeperatedInputList = ({
  labelText,
  className,
  onInputChange,
  maxInputLength = 4,
  seperator,
  passwordInputCount = 0,
  placeholder,
  inputNames = [],
}) => {
  const InputList = inputNames.map((inputName, index) => (
    <Fragment key={inputName}>
      <Input
        name={inputName}
        type={index <= inputNames.length - passwordInputCount - 1 ? "text" : "password"}
        className={cx("seperated-input-list__input")}
        maxLength={maxInputLength}
        onChange={onInputChange}
        required
      />
      {index !== inputNames.length - 1 && (
        <span className={cx("seperated-input-list__input-separator")}>{seperator}</span>
      )}
    </Fragment>
  ));

  const placeholderEl = useRef(null);

  const onInputWrapperClick = (event) => {
    if (!event.currentTarget.contains(document.activeElement) || !placeholderEl.current) {
      return;
    }

    placeholderEl.current.style.display = "none";
  };

  return (
    <div className={`${cx("seperated-input-list")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("seperated-input-list__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("seperated-input-list__input-wrapper")} onClick={onInputWrapperClick}>
        {InputList}
      </div>
      {placeholder && (
        <span className={cx("seperated-input-list__placeholder")} ref={placeholderEl}>
          {placeholder}
        </span>
      )}
    </div>
  );
};

export default SeperatedInputList;
