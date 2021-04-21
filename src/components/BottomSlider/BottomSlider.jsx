import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./BottomSlider.module.scss";

const cx = classNames.bind(styles);

const BottomSlider = ({ children }) => {
  return (
    <div className={cx("bottom-slider")}>
      {children}
    </div>
  );
};

// TODO: 전체 컴포넌트에 prop-type 넣기
BottomSlider.propTypes = {
}


export default BottomSlider;
