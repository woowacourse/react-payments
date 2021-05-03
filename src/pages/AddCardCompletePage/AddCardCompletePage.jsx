import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AddCardCompletePage.module.scss";

import useCardNickName from "../../hooks/cardNickNameHook";
import useCardList from "../../hooks/cardListHook";

import { LABEL_TEXT, STATE_KEY, PAGE_PATH } from "../../constants";

import Label from "../../components/Label/Label";
import Card from "../../components/Card/Card";
import BorderInput from "../../components/BorderInput/BorderInput";
import Button from "../../components/Button/Button";
import { getCardColor } from "../../utils/cardCompany";

const cx = classNames.bind(styles);

const AddCardCompletePage = ({ cardState, setCardStateByKey, cardListState, setCardListState }) => {
  const cardNickNameHook = useCardNickName(cardState, setCardStateByKey);
  const cardListHook = useCardList(cardListState, setCardListState);

  const onAddCardCompleteButtonClick = () => {
    const nickNameUpdatedCard = { ...cardState };
    cardListHook.updateCardItem(cardState.cardNumber, nickNameUpdatedCard);
  };

  return (
    <div className={cx("add-card-complete-page")}>
      <main className={cx("add-card-complete-page__main")}>
        <Label size="large" className={cx("add-card-complete-page__label")} labelText={LABEL_TEXT.CARD_ADD_COMPLETE} />
        <Card
          className={cx("add-card-complete-page__card")}
          cardOwner={cardState[STATE_KEY.CARD_OWNER]}
          cardNumber={cardState[STATE_KEY.CARD_NUMBER]}
          cardCompany={cardState[STATE_KEY.CARD_COMPANY]}
          cardExpiration={cardState[STATE_KEY.CARD_EXPIRATION]}
          backgroundColor={getCardColor(cardState[STATE_KEY.CARD_COMPANY])}
        />
        <BorderInput
          onInputChange={cardNickNameHook.onCardNickNameInputChange}
          className={cx("add-card-complete-page__input")}
        />
      </main>
      <div className={cx("add-card-complete-page__bottom")}>
        {cardNickNameHook.cardNickName !== "" && (
          <Link to={PAGE_PATH.ROOT}>
            <Button onClick={onAddCardCompleteButtonClick}>확인</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AddCardCompletePage;
