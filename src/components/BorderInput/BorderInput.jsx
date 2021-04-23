import classNames from "classnames/bind";
import styles from "./BorderInput.module.scss";

const cx = classNames.bind(styles);

const BorderInput = ({ className }) => {
  return <input className={`${cx("border-input")} ${className}`}></input>;
};

export default BorderInput;
