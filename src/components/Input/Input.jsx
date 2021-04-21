import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

const Input = ({ textAlign = "center", placeholder }) => {
  return <input className={cx("input")} style={{ textAlign }} placeholder={placeholder}></input>;
};

export default Input;
