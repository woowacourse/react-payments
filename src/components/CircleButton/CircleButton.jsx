import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./CircleButton.module.scss";

const cx = classNames.bind(styles);

const CircleButton = ({ buttonText, circleColor, className = "" }) => {
  return (
    <div className={`${cx("circle-button")} ${className}`}>
      <div className={cx("circle-button__circle")} style={{ backgroundColor: circleColor }}></div>
      <span className={cx("circle-button__text")}>{buttonText}</span>
    </div>
  );
};

// TODO: 전체 컴포넌트에 prop-type 넣기
CircleButton.propTypes = {
  buttonText: PropTypes.string,
  circleColor: PropTypes.string,
};

export default CircleButton;
