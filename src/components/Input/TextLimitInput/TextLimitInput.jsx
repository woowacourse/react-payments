import classNames from "classnames/bind";
import styles from "./TextLimitInput.module.scss";
import Input from "../Input";
import { STATE_KEY } from "../../../constants";
import { isNumberText } from "../../../utils/cardInputValidation";

const cx = classNames.bind(styles);

const TextLimitInput = ({ cardInputState, setCardInputState, placeholder, labelText, lengthLimit, className = "", inputWidth }) => {
  const onCardOwnerInputChange = (event) => {
    const { value } = event.target

    if (isNumberText(value) && value !== "") {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardInputState(state => ({
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
        <span className={cx("text-limit-input__length-limit")}>{cardInputState[STATE_KEY.CARD_OWNER].length} / {lengthLimit}</span>
      </div>
      <Input maxLength={lengthLimit} onChange={onCardOwnerInputChange} placeholder={placeholder} textAlign="left" inputWidth={inputWidth} />
    </div>
  );
};

export default TextLimitInput;
