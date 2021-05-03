import classNames from "classnames/bind";
import styles from "./BorderInput.module.scss";

const cx = classNames.bind(styles);

const BorderInput = ({ className, onInputChange }) => {
  return <input className={`${cx("border-input")} ${className}`} onChange={onInputChange}></input>;
};

export default BorderInput;
