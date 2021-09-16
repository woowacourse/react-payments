import classNames from "classnames/bind";
import styles from "./BorderInput.module.scss";

const cx = classNames.bind(styles);

const BorderInput = ({ className, onChange }) => {
  return <input className={`${cx("border-input")} ${className}`} onChange={onChange}></input>;
};

export default BorderInput;
