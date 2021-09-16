import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./CircleButton.module.scss";

const cx = classNames.bind(styles);

const CircleButton = ({ buttonText, circleColor, onClick, className = "" }) => {
  return (
    <div onClick={onClick} className={`${cx("circle-button")} ${className}`}>
      <div className={cx("circle-button__circle")} style={{ backgroundColor: circleColor }}></div>
      <span className={cx("circle-button__text")}>{buttonText}</span>
    </div>
  );
};

CircleButton.propTypes = {
  buttonText: PropTypes.string,
  circleColor: PropTypes.string,
};

export default CircleButton;
