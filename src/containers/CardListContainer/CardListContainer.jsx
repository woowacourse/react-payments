import classNames from "classnames/bind";
import styles from "./CardListContainer.module.scss";

import Card from "../../components/Card/Card";

const cx = classNames.bind(styles);

const CardListContainer = ({ cards }) => {
  const cardList = cards.map((card) => {
    return (
      <Card
        key={card.cardNickName}
        className={cx("card-list-container__card")}
        cardCompany={card.cardCompany}
        backgroundColor={card.backgroundColor}
        cardNumberList={card.cardNumberList}
        cardOwner={card.cardOwner}
        cardExpiration={card.cardExpiration}
        cardNickName={card.cardNickName}
      />
    );
  });
  return <div className={cx("card-list-container")}>{cardList}</div>;
};

export default CardListContainer;
