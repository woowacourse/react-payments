import classNames from "classnames/bind";
import styles from "./BoxInputList.module.scss";

const cx = classNames.bind(styles);

const BoxInputList = ({labelText, numbers, dotCount}) => {
  const boxInputs = numbers.map(number => <input type="password" maxlength="1" className={cx("box-input-list__box-input")}></input>)
  const dots = [...Array(dotCount)].map(() => <div className={cx("box-input-list__dot")}></div>)

  return (
    <div className={cx('box-input-list')}>
      <label className={cx("box-input-list__label")} name={labelText}>
        {labelText}
      </label>
      <div className={cx("box-input-list__bottom")}>
        {boxInputs}
        {dots}
      </div>
    </div>
  )
};

export default BoxInputList;
