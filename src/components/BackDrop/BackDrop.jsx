import classNames from "classnames/bind";
import styles from "./BackDrop.module.scss";

const cx = classNames.bind(styles);

const BackDrop = ({ zIndex, className = "", backDropClick }) => {
  return <div onClick={backDropClick} className={`${cx("back-drop")} ${className}`} style={{ zIndex }}></div>;
};

export default BackDrop;
