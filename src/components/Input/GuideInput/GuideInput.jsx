import classNames from "classnames/bind";
// TODO : app.css 스토리북에서도 전역으로 적용되도록 수정
import "../../../app.css";
import styles from "./GuideInput.module.scss";
import Input from "../Input";
import cardCVC from "../../../assets/images/card-cvc.png";
import questionMark from "../../../assets/svgs/question-mark.svg";

const cx = classNames.bind(styles);

// TODO : 숫자 입력을 받되, 한글자마다 Dot 이 되도록 처리

const GuideInput = ({ labelText, width, guideIcon = questionMark, guideImage = cardCVC }) => {
  return (
    <div className={cx("guide-input")}>
      <label className={cx("guide-input__label")} name={labelText}>
        {labelText}
      </label>
      <div className={cx("guide-input__bottom")}>
        <Input width={width} />
        <div className={cx("guide-input__guide-icon")}>
          <img src={guideIcon} alt="안내 아이콘" />
        </div>
        <img className={cx("guide-input__guide-image")} src={guideImage} />
      </div>
    </div>
  );
};

export default GuideInput;
