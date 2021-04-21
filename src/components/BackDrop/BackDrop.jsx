import classNames from "classnames/bind";
import styles from "./BackDrop.module.scss";

const cx = classNames.bind(styles);

const BackDrop = ({zIndex}) => {
  return <div className={cx("back-drop")} style={{zIndex}} ></div>
};

export default BackDrop;
