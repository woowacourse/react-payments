import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

const Input = ({ type="text", textAlign = "center", placeholder, labelText, inputWidth, className = "", onChange, maxLength }) => {
  return (
    <div className={`${cx("input-wrapper")} ${className}`} style={{ width: inputWidth }}>
      {!!labelText?.length && (
        <label className={cx("input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <input type={type} maxLength={maxLength} className={cx("input")} style={{ textAlign }} placeholder={placeholder} onChange={onChange}></input>
    </div>
  );
};

export default Input;
