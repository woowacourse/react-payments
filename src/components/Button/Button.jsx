import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({ children }) => {
  return <button className={cx("button")}>{children}</button>;
};

export default Button;
