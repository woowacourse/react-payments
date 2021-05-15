import classNames from "classnames/bind";
import styles from "./TextLimitInput.module.scss";
import Input from "../Input";

const cx = classNames.bind(styles);

const TextLimitInput = ({ textLength = 0, placeholder, labelText, lengthLimit, className = "", onInputChange }) => {
  return (
    <div className={`${cx("text-limit-input")} ${className}`}>
      <div className={cx("text-limit-input__top")}>
        <label className={cx("text-limit-input__label")} name={labelText}>
          {labelText}
        </label>
        <span className={cx("text-limit-input__length-limit")}>
          {textLength} / {lengthLimit}
        </span>
      </div>
      <Input maxLength={lengthLimit} onChange={onInputChange} placeholder={placeholder} textAlign="left" />
    </div>
  );
};

export default TextLimitInput;
