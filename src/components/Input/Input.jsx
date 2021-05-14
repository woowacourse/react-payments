import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

const Input = ({
  type = "text",
  textAlign = "center",
  placeholder,
  labelText,
  className = "",
  name,
  onChange,
  maxLength,
}) => {
  return (
    <div className={`${cx("input-wrapper")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <input
        type={type}
        name={name}
        maxLength={maxLength}
        className={cx("input")}
        style={{ textAlign }}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
