import classNames from "classnames/bind";
// TODO : app.css 스토리북에서도 전역으로 적용되도록 수정
import styles from "./TextLimitInput.module.scss";
import Input from "../Input";
import { STATE_KEY } from "../../../constants";

const cx = classNames.bind(styles);

const TextLimitInput = ({ appState, setAppState, placeholder, labelText, lengthLimit, className = "", inputWidth }) => {
  const onCardOwnerInputChange = (event) => {
    const { value } = event.target

    if (!value.split('').every((char) => Number.isNaN(Number(char)))) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setAppState(state => ({
      ...state,
      [STATE_KEY.CARD_OWNER]: value
    }));
  }

  return (
    <div className={`${cx("text-limit-input")} ${className}`}>
      <div className={cx("text-limit-input__top")}>
        <label className={cx("text-limit-input__label")} name={labelText}>
          {labelText}
        </label>
        <span className={cx("text-limit-input__length-limit")}>{appState[STATE_KEY.CARD_OWNER].length} / {lengthLimit}</span>
      </div>
      <Input maxLength={lengthLimit} onChange={onCardOwnerInputChange} placeholder={placeholder} textAlign="left" inputWidth={inputWidth} />
    </div>
  );
};

export default TextLimitInput;
