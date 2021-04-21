import classNames from "classnames/bind";
import styles from "./BoxButton.module.scss";

const cx = classNames.bind(styles);

const BoxButton = ({ }) => {
  return (
    <div className={cx("box-button")}>
      +
    </div>
  );
};

export default BoxButton;
