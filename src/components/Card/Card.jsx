import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

// TODO : 배경색에 따라 글자 색이 바뀌도록 만들기
const Card = ({ cardName, backgroundColor, cardNumberList, cardOwner, cardExpiration, cardNickName, className }) => {
  const [firstCardNumbers, secondCardNumbers, thirdCardNumbers, fourthCardNumbers] = cardNumberList;

  return (
    <div className={cx("card-wrapper", className)}>
      <div className={cx("card")} style={{ backgroundColor }}>
        <span className={cx("card__name")}>{cardName}</span>
        <div className={cx("card__chip")}></div>
        <div className={cx("card__number")}>
          <input
            type="text"
            name="카드번호 입력"
            maxlength="4"
            className={cx("card__number-input", "card__number-input--visible")}
            value={firstCardNumbers.join("")}
          />
          <input
            type="text"
            name="카드번호 입력"
            maxlength="4"
            className={cx("card__number-input", "card__number-input--visible")}
            value={secondCardNumbers.join("")}
          />
          <input
            type="password"
            name="카드번호 입력"
            maxlength="4"
            className={cx("card__number-input", "card__number-input--invisible")}
            value={thirdCardNumbers.join("")}
            disabled
          />
          <input
            type="password"
            name="카드번호 입력"
            maxlength="4"
            className={cx("card__number-input", "card__number-input--invisible")}
            value={fourthCardNumbers.join("")}
            disabled
          />
        </div>
        <div className={cx("card__bottom")}>
          <span className={cx("card__owner")}>{cardOwner}</span>
          <span className={cx("card__expiration")}>{cardExpiration}</span>
        </div>
      </div>
      {!!cardNickName?.length && <label className={cx("card-nickname")}>{cardNickName}</label>}
    </div>
  );
};

export default Card;
