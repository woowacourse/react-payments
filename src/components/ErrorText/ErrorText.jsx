import classNames from "classnames/bind";
import styles from "./ErrorText.module.scss";

const cx = classNames.bind(styles);

const ErrorText = ({ className, children, align = "right" }) => {
  return (
    <p className={`${cx("error-text")} ${className}`} style={{ textAlign: align }}>
      {children}
    </p>
  );
};

export default ErrorText;
