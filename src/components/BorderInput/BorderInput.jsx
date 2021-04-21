import classNames from "classnames/bind";
import styles from "./BorderInput.module.scss";

const cx = classNames.bind(styles);

const BorderInput = () => {
  return <input className={cx("border-input")}></input>
};

export default BorderInput;
