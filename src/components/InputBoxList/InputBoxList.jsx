import classNames from "classnames/bind";
import styles from "./InputBoxList.module.scss";

const cx = classNames.bind(styles);

const InputBoxList = ({ onInputChange, labelText, inputCount, dotCount, className = "" }) => {
  const inputBoxes = [...Array(inputCount)].map((_, index) => (
    <input
      maxLength="1"
      key={index}
      name={index}
      type="password"
      className={cx("input-box-list__input-box")}
      onChange={onInputChange}
    ></input>
  ));
  const dots = [...Array(dotCount)].map((_, index) => <div key={index} className={cx("input-box-list__dot")}></div>);

  return (
    <div className={`${cx("input-box-list")} ${className}`}>
      <label className={cx("input-box-list__label")} name={labelText}>
        {labelText}
      </label>
      <div className={cx("input-box-list__bottom")}>
        {inputBoxes}
        {dots}
      </div>
    </div>
  );
};

export default InputBoxList;
