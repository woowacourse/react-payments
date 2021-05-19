import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

const initialCardNumber = { firstCardNumber: "", secondCardNumber: "", thirdCardNumber: "", fourthCardNumber: "" };
const initialCardExpiration = { expirationMonth: "", expirationYear: "" };

// TODO : 배경색에 따라 글자 색이 바뀌도록 만들기
const Card = ({
  cardCompany = "",
  backgroundColor = "#D2D2D2",
  cardNumber = initialCardNumber,
  cardOwner = "",
  cardExpiration = initialCardExpiration,
  cardNickName = "",
  className,
  onClick,
}) => {
  const { firstCardNumber, secondCardNumber, thirdCardNumber, fourthCardNumber } = cardNumber;

  const thirdCardNumberDots = [...Array(thirdCardNumber.length)].map(() => (
    <div className={cx("card__number-dot")}></div>
  ));
  const fourthCardNumberDots = [...Array(fourthCardNumber.length)].map(() => (
    <div className={cx("card__number-dot")}></div>
  ));

  const cardExpirationText =
    Object.values(cardExpiration).every((value) => value !== "") && Object.values(cardExpiration).join(" / ");

  const clickableClass = onClick ? "card--clickable" : "";

  return (
    <div className={cx("card-wrapper", className)}>
      <div className={cx("card", clickableClass)} style={{ backgroundColor }} onClick={onClick}>
        <span className={cx("card__type")}>{cardCompany}</span>
        <div className={cx("card__chip")}></div>
        <div className={cx("card__number")}>
          <div className={cx("card__number-digits", "card__number-digits--visible")}>{firstCardNumber}</div>
          <div className={cx("card__number-digits", "card__number-digits--visible")}>{secondCardNumber}</div>
          <div className={cx("card__number-digits", "card__number-dots")}>{thirdCardNumberDots}</div>
          <div className={cx("card__number-digits", "card__number-dots")}>{fourthCardNumberDots}</div>
        </div>
        <div className={cx("card__bottom")}>
          <span className={cx("card__owner")}>{cardOwner}</span>
          <span className={cx("card__expiration")}>{cardExpirationText}</span>
        </div>
      </div>
      {!!cardNickName?.length && <label className={cx("card-nickname")}>{cardNickName}</label>}
    </div>
  );
};

export default Card;
