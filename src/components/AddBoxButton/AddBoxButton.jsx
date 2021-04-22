import classNames from "classnames/bind";
import styles from "./AddBoxButton.module.scss";

const cx = classNames.bind(styles);

const AddBoxButton = ({}) => {
  return <div className={cx("add-box-button")}>+</div>;
};

export default AddBoxButton;
