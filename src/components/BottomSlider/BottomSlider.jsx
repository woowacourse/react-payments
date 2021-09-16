import classNames from "classnames/bind";
import styles from "./BottomSlider.module.scss";

const cx = classNames.bind(styles);

const BottomSlider = ({ children, className = "" }) => {
  return <div className={`${cx("bottom-slider")} ${className}`}>{children}</div>;
};

export default BottomSlider;
