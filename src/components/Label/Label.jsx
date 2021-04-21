import classNames from "classnames/bind";
import styles from "./Label.module.scss";

const cx = classNames.bind(styles);

const Label = ({ labelText, size }) => {
  const textSize = {
    small: "16px",
    large: "24px"
  }

  return (
    <div className={cx("label")} style={{fontSize: textSize[size] ? textSize[size] : textSize.small}}>
      {labelText}
    </div>
  );
};

export default Label;
