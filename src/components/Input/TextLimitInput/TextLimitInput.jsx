import classNames from "classnames/bind";
// TODO : app.css 스토리북에서도 전역으로 적용되도록 수정
import "../../../app.css";
import styles from "./TextLimitInput.module.scss";
import Input from "../Input";

const cx = classNames.bind(styles);

const TextLimitInput = ({ placeholder, labelText, lengthLimit, className = '', inputWidth }) => {
  return (
    <div className={`${cx("text-limit-input")} ${className}`}>
      <div className={cx("text-limit-input__top")}>
        <label className={cx("text-limit-input__label")} name={labelText}>
          {labelText}
        </label>
        {/* TODO : input value 의 length 동적으로 처리하기 */}
        <span className={cx("text-limit-input__length-limit")}>1 / {lengthLimit}</span>
      </div>
      <Input placeholder={placeholder} textAlign="left" inputWidth={inputWidth} />
    </div>
  );
};

export default TextLimitInput;
