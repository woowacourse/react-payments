import classNames from "classnames/bind";
// TODO : app.css 스토리북에서도 전역으로 적용되도록 수정
import "../../../app.css";
import styles from "./GuideInput.module.scss";
import Input from "../Input";

const cx = classNames.bind(styles);

const GuideInput = ({ labelText, width }) => {
  return (
    <div className={cx("guide-input")}>
      <label className={cx("guide-input__label")} name={labelText}>
        {labelText}
      </label>
      <div>
        <Input width={width} />
        <img></img>
      </div>
    </div>
  );
};

export default GuideInput;
