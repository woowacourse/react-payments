import classNames from "classnames/bind";
import styles from "./NavigationButton.module.scss";
import leftArrowIcon from "../../assets/svgs/left-arrow.svg";

const cx = classNames.bind(styles);

const NavigationButton = ({ buttonText, onClick }) => {
  return (
    <div className={cx("navigation-button")} onClick={onClick}>
      <img src={leftArrowIcon} className={cx("navigation-button__icon")} alt={buttonText} />
      <span className={cx("navigation-button__text")}>{buttonText}</span>
    </div>
  );
};

export default NavigationButton;
