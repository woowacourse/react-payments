import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

const Input = ({ textAlign = "center", placeHolder }) => {
  return <input className={cx("input")} style={{ textAlign }} placeHolder={placeHolder}></input>;
};

export default Input;
