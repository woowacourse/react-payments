import { useState, useMemo, useContext } from "react";

import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AddCardCompletePage.module.scss";

import useCardList from "../../hooks/cardListHook";

import { LABEL_TEXT, STATE_KEY, PAGE_PATH, ANIMATION } from "../../constants";
import appConfirm from "../../utils/appConfirm";

import Label from "../../components/Label/Label";
import Card from "../../components/Card/Card";
import BorderInput from "../../components/BorderInput/BorderInput";
import Button from "../../components/Button/Button";
import { getCardColor } from "../../utils/cardCompany";
import AppContext from "../../contexts/appContext";

const cx = classNames.bind(styles);

const AddCardCompletePage = () => {
  const cardListHook = useCardList();
  const [cardNickName, setCardNickName] = useState("");
  const [lastAddedCard] = useMemo(() => cardListHook.cardListState.slice(-1), [cardListHook.cardListState]);
  const history = useHistory();

  const onCardNickNameRegister = () => {
    lastAddedCard[STATE_KEY.CARD_NICK_NAME] = cardNickName;
    cardListHook.updateCardItem(lastAddedCard.cardNumber, lastAddedCard);
    history.push(PAGE_PATH.ROOT);
  };

  const onPageMove = () => {
    if (!appConfirm.confirmNickNameRegistration()) {
      return;
    }

    history.push(PAGE_PATH.ROOT);
  };

  const onCardNickNameChange = (event) => {
    const { value } = event.target;
    setCardNickName(value);
  };

  return (
    <div className={cx("add-card-complete-page")}>
      <main className={`${cx("add-card-complete-page__main")} ${ANIMATION.FADE_IN}`}>
        <Label size="large" className={cx("add-card-complete-page__label")} labelText={LABEL_TEXT.CARD_ADD_COMPLETE} />
        <Card
          className={cx("add-card-complete-page__card")}
          cardOwner={lastAddedCard[STATE_KEY.CARD_OWNER]}
          cardNumber={lastAddedCard[STATE_KEY.CARD_NUMBER]}
          cardCompany={lastAddedCard[STATE_KEY.CARD_COMPANY]}
          cardExpiration={lastAddedCard[STATE_KEY.CARD_EXPIRATION]}
          backgroundColor={getCardColor(lastAddedCard[STATE_KEY.CARD_COMPANY])}
        />
        <BorderInput onInputChange={onCardNickNameChange} className={cx("add-card-complete-page__input")} />
      </main>
      <div className={cx("add-card-complete-page__bottom")}>
        {cardNickName !== "" ? (
          <Button onClick={onCardNickNameRegister}>확인</Button>
        ) : (
          <Button onClick={onPageMove}>넘어가기</Button>
        )}
      </div>
    </div>
  );
};

export default AddCardCompletePage;
