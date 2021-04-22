import classNames from "classnames/bind";
import styles from "./InputBoxList.module.scss";

const cx = classNames.bind(styles);

const InputBoxList = ({labelText, numbers, dotCount, className = ''}) => {
  const inputBoxes = numbers.map((number, index) => <input key={index} type="password" maxlength="1" className={cx("input-box-list__input-box")}></input>)
  const dots = [...Array(dotCount)].map((_, index) => <div key={index} className={cx("input-box-list__dot")}></div>)

  return (
    <div className={`${cx('input-box-list')} ${className}`}>
      <label className={cx("input-box-list__label")} name={labelText}>
        {labelText}
      </label>
      <div className={cx("input-box-list__bottom")}>
        {inputBoxes}
        {dots}
      </div>
    </div>
  )
};

export default InputBoxList;
