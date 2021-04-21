import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

const Input = ({ textAlign = "center", placeholder, labelText, width }) => {
  return (
    <>
      {!!labelText?.length && (
        <label className={cx("input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <input className={cx("input")} style={{ textAlign, width }} placeholder={placeholder}></input>
    </>
  );
};

export default Input;
