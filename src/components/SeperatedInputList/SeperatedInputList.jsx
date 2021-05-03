import classNames from "classnames/bind";
import styles from "./SeperatedInputList.module.scss";
import { STATE_KEY } from "../../constants";

const cx = classNames.bind(styles);

const SeperatedInputList = ({ labelText, className, onInputChange, maxInputLength = 4 }) => {
  return (
    <div className={`${cx("seperated-input-list")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("seperated-input-list__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("seperated-input-list__input-wrapper")}>
        <input
          name={STATE_KEY.FIRST_CARD_NUMBER}
          type="text"
          className={cx("seperated-input-list__input")}
          maxLength={maxInputLength}
          onChange={onInputChange}
          required
        />
        <span className={cx("seperated-input-list__input-separator")}></span>
        <input
          name={STATE_KEY.SECOND_CARD_NUMBER}
          type="text"
          className={cx("seperated-input-list__input")}
          maxLength={maxInputLength}
          onChange={onInputChange}
          required
        />
        <span className={cx("seperated-input-list__input-separator")}></span>
        <input
          name={STATE_KEY.THIRD_CARD_NUMBER}
          type="password"
          className={cx("seperated-input-list__input", "seperated-input-list__input--dot")}
          maxLength={maxInputLength}
          onChange={onInputChange}
          required
        />
        <span className={cx("seperated-input-list__input-separator")}></span>
        <input
          name={STATE_KEY.FOURTH_CARD_NUMBER}
          type="password"
          className={cx("seperated-input-list__input", "seperated-input-list__input--dot")}
          maxLength={maxInputLength}
          onChange={onInputChange}
          required
        />
      </div>
    </div>
  );
};

export default SeperatedInputList;
