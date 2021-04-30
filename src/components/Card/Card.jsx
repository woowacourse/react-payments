import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

const initialCardNumber = { firstCardNumber: "", secondCardNumber: "", thirdCardNumber: "", fourthCardNumber: "" };

// TODO : 배경색에 따라 글자 색이 바뀌도록 만들기
const Card = ({
  cardCompany = "",
  backgroundColor = "#D2D2D2",
  cardNumber = initialCardNumber,
  cardOwner = "",
  cardExpiration = "",
  cardNickName = "",
  className,
}) => {
  const { firstCardNumber, secondCardNumber, thirdCardNumber, fourthCardNumber } = cardNumber;

  return (
    <div className={cx("card-wrapper", className)}>
      <div className={cx("card")} style={{ backgroundColor }}>
        <span className={cx("card__type")}>{cardCompany}</span>
        <div className={cx("card__chip")}></div>
        <div className={cx("card__number")}>
          <input
            type="text"
            name="카드번호 입력"
            maxLength="4"
            className={cx("card__number-input", "card__number-input--visible")}
            defaultValue={firstCardNumber}
            disabled
          />
          <input
            type="text"
            name="카드번호 입력"
            maxLength="4"
            className={cx("card__number-input", "card__number-input--visible")}
            defaultValue={secondCardNumber}
            disabled
          />
          <input
            type="password"
            name="카드번호 입력"
            maxLength="4"
            className={cx("card__number-input", "card__number-input--invisible")}
            defaultValue={thirdCardNumber}
            disabled
          />
          <input
            type="password"
            name="카드번호 입력"
            maxLength="4"
            className={cx("card__number-input", "card__number-input--invisible")}
            defaultValue={fourthCardNumber}
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
