import classNames from "classnames/bind";
import styles from "./CardListContainer.module.scss";
import { getCardColor } from "../../utils/cardCompany";

import Card from "../../components/Card/Card";

const cx = classNames.bind(styles);

const CardListContainer = ({ cardListState }) => {
  const cardList = cardListState.map((card) => {
    return (
      <Card
        key={Object.values(card.cardNumber).join("")}
        className={cx("card-list-container__card")}
        cardCompany={card.cardCompany}
        backgroundColor={getCardColor(card.cardCompany)}
        cardNumber={card.cardNumber}
        cardOwner={card.cardOwner}
        cardExpiration={card.cardExpiration}
        cardNickName={card.cardNickName}
      />
    );
  });
  return <div className={cx("card-list-container")}>{cardList}</div>;
};

export default CardListContainer;
