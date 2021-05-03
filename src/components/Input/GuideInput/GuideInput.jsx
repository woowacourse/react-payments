import classNames from "classnames/bind";
// TODO : app.css 스토리북에서도 전역으로 적용되도록 수정
import styles from "./GuideInput.module.scss";
import Input from "../Input";
import cardCVC from "../../../assets/images/card-cvc.png";
import questionMark from "../../../assets/svgs/question-mark.svg";

const cx = classNames.bind(styles);

const GuideInput = ({
  labelText,
  guideIcon = questionMark,
  guideImage = cardCVC,
  className = "",
  inputWidth,
  onInputChange,
}) => {
  return (
    <div className={`${cx("guide-input")} ${className}`}>
      <label className={cx("guide-input__label")} name={labelText}>
        {labelText}
      </label>
      <div className={cx("guide-input__bottom")}>
        <Input onChange={onInputChange} maxLength="3" type="password" inputWidth={inputWidth} />
        <div className={cx("guide-input__guide-icon")}>
          <img src={guideIcon} alt="안내 아이콘" />
        </div>
        <img className={cx("guide-input__guide-image")} src={guideImage} alt="what is cvc" />
      </div>
    </div>
  );
};

export default GuideInput;
