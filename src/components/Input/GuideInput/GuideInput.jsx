import classNames from "classnames/bind";
// TODO : app.css 스토리북에서도 전역으로 적용되도록 수정
import styles from "./GuideInput.module.scss";
import Input from "../Input";
import cardCVC from "../../../assets/images/card-cvc.png";
import questionMark from "../../../assets/svgs/question-mark.svg";
import { STATE_KEY } from "../../../constants";
import { isNumberText } from "../../../utils/cardInputValidation";

const cx = classNames.bind(styles);

const GuideInput = ({ setCardInputState, labelText, guideIcon = questionMark, guideImage = cardCVC, className = "", inputWidth }) => {
  const onCardCVCInputChange = (event) => {
    const { value } = event.target;

    if (!isNumberText(value)) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardInputState(state => ({
      ...state,
      [STATE_KEY.CARD_CVC]: value
    }))
  }

  return (
    <div className={`${cx("guide-input")} ${className}`}>
      <label className={cx("guide-input__label")} name={labelText}>
        {labelText}
      </label>
      <div className={cx("guide-input__bottom")}>
        <Input onChange={onCardCVCInputChange} maxLength="3" type="password" inputWidth={inputWidth} />
        <div className={cx("guide-input__guide-icon")}>
          <img src={guideIcon} alt="안내 아이콘" />
        </div>
        <img className={cx("guide-input__guide-image")} src={guideImage} alt="what is cvc" />
      </div>
    </div>
  );
};

export default GuideInput;
