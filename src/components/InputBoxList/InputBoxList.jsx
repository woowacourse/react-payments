import classNames from "classnames/bind";
import styles from "./InputBoxList.module.scss";
import {STATE_KEY} from '../../utils/constants';
import { isNumberText } from "../../utils/cardInputValidation";

const cx = classNames.bind(styles);

const InputBoxList = ({ setCardInputState, labelText, numbers, dotCount, className = "" }) => {
  const onCardPasswordInputChange = (event) => {
    const { value, name: inputIndex } = event.target;
    if (!isNumberText(value)) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardInputState(state => {
      const newCardPassword = [...state[STATE_KEY.CARD_PASSWORD]];
      newCardPassword[Number(inputIndex)] = value
      return {
        ...state,
        [STATE_KEY.CARD_PASSWORD]: newCardPassword
      }
    });
  }

  const inputBoxes = numbers.map((number, index) => (
    <input maxLength="1" key={index} name={index} type="password" className={cx("input-box-list__input-box")} onChange={onCardPasswordInputChange}></input>
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
