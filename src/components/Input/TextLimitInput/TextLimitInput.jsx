import classNames from "classnames/bind";
import styles from "./TextLimitInput.module.scss";
import Input from "../Input";

const cx = classNames.bind(styles);

const TextLimitInput = ({
  cardOwnerState,
  placeholder,
  labelText,
  lengthLimit,
  className = "",
  inputWidth,
  onInputChange,
}) => {
  return (
    <div className={`${cx("text-limit-input")} ${className}`}>
      <div className={cx("text-limit-input__top")}>
        <label className={cx("text-limit-input__label")} name={labelText}>
          {labelText}
        </label>
        <span className={cx("text-limit-input__length-limit")}>
          {cardOwnerState.length} / {lengthLimit}
        </span>
      </div>
      <Input
        maxLength={lengthLimit}
        onChange={onInputChange}
        placeholder={placeholder}
        textAlign="left"
        inputWidth={inputWidth}
      />
    </div>
  );
};

export default TextLimitInput;
