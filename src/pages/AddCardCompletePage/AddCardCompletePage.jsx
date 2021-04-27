import classNames from "classnames/bind";
import styles from "./AddCardCompletePage.module.scss";

import { LABEL_TEXT } from "../../constants";

import Label from "../../components/Label/Label";
import Card from "../../components/Card/Card";
import BorderInput from "../../components/BorderInput/BorderInput";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);

// 목업용 더미 데이터
const cardMockUp = {
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
};

// TODO : 카드 크기 조절하기
const AddCardCompletePage = ({ selectedCardCompany, cardNickName }) => {
  return (
    <div className={cx("add-card-complete-page")}>
      <main className={cx("add-card-complete-page__main")}>
        <Label size="large" className={cx("add-card-complete-page__label")} labelText={LABEL_TEXT.CARD_ADD_COMPLETE} />
        <Card className={cx("add-card-complete-page__card")} {...cardMockUp} />
        <BorderInput className={cx("add-card-complete-page__input")} />
      </main>
      <div className={cx("add-card-complete-page__bottom")}>
        <Button>확인</Button>
      </div>
    </div>
  );
};

export default AddCardCompletePage;
