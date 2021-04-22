import classNames from "classnames/bind";
import styles from "./CardListPage.module.scss";

import Label from "../../components/Label/Label";
import CardListContainer from "../../containers/CardListContainer/CardListContainer";
import AddBoxButton from "../../components/AddBoxButton/AddBoxButton";
import { LABEL_TEXT } from "../../constants";

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
  return (
    <div className={cx("card-list-page")}>
      <header className={cx("card-list-page__header")}>
        <Label labelText={LABEL_TEXT.OWNED_CARD} />
      </header>
      <main className={cx("card-list-page__main")}>
        <CardListContainer cards={cardMockUps} />
        <AddBoxButton />
      </main>
    </div>
  );
};

export default CardListPage;
