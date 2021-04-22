import { useState, useLayoutEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardListPage.module.scss";
import { Link } from "react-router-dom";

import Label from "../../components/Label/Label";
import CardListContainer from "../../containers/CardListContainer/CardListContainer";
import AddBoxButton from "../../components/AddBoxButton/AddBoxButton";
import { ANIMATION, LABEL_TEXT, PAGE_PATH } from "../../constants";

const cx = classNames.bind(styles);

// 목업용 더미 데이터
const cardMockUps = [
  {
    cardName: "포코카드",
    backgroundColor: "#547CE4",
    cardNumberList: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    cardOwner: "SUN",
    cardExpiration: "04/21",
    cardNickName: "엄카",
  },
  {
    cardName: "로이드 카드",
    backgroundColor: "red",
    cardNumberList: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    cardOwner: "SUN",
    cardExpiration: "04/21",
    cardNickName: "법카",
  },
];

const CardListPage = ({}) => {
  const [pageAnimation, setPageAnimation] = useState(ANIMATION.RIGHT_IN);

  useLayoutEffect(() => {
    setPageAnimation(ANIMATION.RIGHT_IN);
  }, []);

  return (
    <div className={`${cx("card-list-page")} ${pageAnimation}`}>
      <header className={cx("card-list-page__header")}>
        <Label labelText={LABEL_TEXT.OWNED_CARD} />
      </header>
      <main className={cx("card-list-page__main")}>
        <CardListContainer cards={cardMockUps} />
        <Link to={PAGE_PATH.ADD}>
          <AddBoxButton />
        </Link>
      </main>
    </div>
  );
};

export default CardListPage;
